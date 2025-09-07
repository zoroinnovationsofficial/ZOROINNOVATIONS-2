import Article from '../models/article.model.js';
import Category from '../models/category.model.js';
import generateImageUrl from '../utils/cloudinary.js';

const handleImageUpload = async (file) => {
  if (!file) return null;

  try {
    const result = await generateImageUrl(file.path);
    return result.secure_url;
  } catch (error) {
    throw error;
  }
};

// GET /api/articles
export const getAllArticles = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 6,
      sort = 'most_recent',
      category,
      tag,
      author,
    } = req.query;

    const parsedPage = Math.max(parseInt(page), 1);
    const parsedLimit = Math.min(parseInt(limit), 50);

    const query = {
      status: 'published',
    };
    if (category) query.category_id = category;
    if (tag) query.tag = tag;
    if (author) query.author = author;

    const sortOptions = {
      most_recent: {
        createdAt: -1,
      },
      oldest: {
        createdAt: 1,
      },
      popular: {
        views: -1,
      },
    };
    const sortQuery = sortOptions[sort] || sortOptions.most_recent;

    const articles = await Article.paginate(query, {
      page: parsedPage,
      limit: parsedLimit,
      sort: sortQuery,
      populate: 'category_id',
    });

    res.status(200).json({
      success: true,
      data: articles,
      message: 'Articles retrieved successfully',
    });
  } catch (error) {
    console.error('Error getting articles:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve articles',
    });
  }
};

// GET /api/articles/:id
export const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true },
    ).populate('category_id');

    if (!article) {
      return res.status(404).json({
        success: false,
        message: 'Article not found',
      });
    }

    res.status(200).json({
      success: true,
      data: article,
      message: 'Article retrieved successfully',
    });
  } catch (error) {
    console.error('Error getting article:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve article',
    });
  }
};

// POST /api/articles
export const createArticle = async (req, res) => {
  try {
    const { title, desc, content, tag, author, category_id } = req.body;

    if (!title || !desc || !tag || !author) {
      return res.status(400).json({
        success: false,
        message: 'Title, description, tag, and author are required',
      });
    }

    let imageUrl;
    if (req.file) {
      imageUrl = await handleImageUpload(req.file);
    }

    const newArticle = await Article.create({
      title,
      desc,
      content,
      tag,
      tag_color: req.body.tag_color || 'bg-gray-100 text-gray-600',
      author,
      author_img: req.body.author_img,
      date: req.body.date || new Date(),
      image: imageUrl,
      category_id,
      status: req.body.status || 'published',
    });

    if (category_id) {
      await Category.findByIdAndUpdate(category_id, {
        $inc: { article_count: 1 },
      });
    }

    res.status(201).json({
      success: true,
      data: newArticle,
      message: 'Article created successfully',
    });
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to create article',
    });
  }
};

// PUT /api/articles/:id
export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (req.file) {
      updates.image = await handleImageUpload(req.file);
    }

    const updatedArticle = await Article.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedArticle) {
      return res.status(404).json({
        success: false,
        message: 'Article not found',
      });
    }

    res.status(200).json({
      success: true,
      data: updatedArticle,
      message: 'Article updated successfully',
    });
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to update article',
    });
  }
};

// DELETE /api/articles/:id
export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findByIdAndDelete(id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: 'Article not found',
      });
    }

    if (article.category_id) {
      await Category.findByIdAndUpdate(article.category_id, {
        $inc: { article_count: -1 },
      });
    }

    res.status(200).json({
      success: true,
      message: 'Article deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete article',
    });
  }
};

import Category from '../models/category.model.js';
// For articles inside category, import your existing Article model here
import Article from '../models/article.model.js'; // Uncomment and update path

// GET /api/v1/categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/v1/categories/:id/articles
export const getCategoryArticles = async (req, res) => {
  try {
    // Validate ObjectId
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    const { page = 1, limit = 6 } = req.query;

    // Ensure Article model exists
    // Uncomment if Article model is available:
    const filter = { category_id: id, status: 'published' };

    const articles = await Article.find(filter)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Article.countDocuments(filter);

    res.json({
      page: Number(page),
      limit: Number(limit),
      total,
      articles,
    });

    // Placeholder response:
    res.status(501).json({ error: 'Article model not implemented' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

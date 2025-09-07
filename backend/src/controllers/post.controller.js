import Post from '../models/post.model.js';

// GET /api/posts/popular
export const getPopularPosts = async (req, res) => {
  try {
    const { limit = 3 } = req.query;
    const parsedLimit = Math.min(parseInt(limit), 10);

    const posts = await Post.find({
      status: 'published',
      popular: true,
    })
      .sort({ views: -1, createdAt: -1 })
      .limit(parsedLimit)
      .select('heading date image views');

    res.status(200).json({
      success: true,
      data: posts,
      message: 'Popular posts retrieved successfully',
    });
  } catch (error) {
    console.error('Error getting popular posts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve popular posts',
    });
  }
};

// GET /api/posts
export const getAllPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = 'recent' } = req.query;

    const parsedPage = Math.max(parseInt(page), 1);
    const parsedLimit = Math.min(parseInt(limit), 50);

    const sortOption = sort === 'popular' ? { views: -1 } : { createdAt: -1 };

    const posts = await Post.paginate(
      { status: 'published' },
      {
        page: parsedPage,
        limit: parsedLimit,
        sort: sortOption,
      },
    );

    res.status(200).json({
      success: true,
      data: posts,
      message: 'Posts retrieved successfully',
    });
  } catch (error) {
    console.error('Error getting posts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve posts',
    });
  }
};

import Author from '../models/author.model.js';
import Article from '../models/article.model.js'; // Uncomment when available

// GET /api/v1/authors
export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /api/v1/authors/:id
export const getAuthorWithArticles = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid author ID' });
    }

    const author = await Author.findById(id);
    if (!author) return res.status(404).json({ error: 'Author not found' });

    // Uncomment and update when Article model is ready:
    const articles = await Article.find({
      author: author.name,
      status: 'published',
    });
    res.json({ author, articles });

    // Placeholder response:
    res.status(501).json({ error: 'Article model not implemented' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

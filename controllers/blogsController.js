const connection = require('../config/connection');
const blogQueries = require('../models/blogs/blogQueries');

module.exports = {
  getAllBlogs: async (req, res) => {
    try {
      const [blogs] = await connection.query(blogQueries.findAllBlogs);
      return res.status(200).json(blogs);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  addBlog: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.json({ error: 'You must provide text for blogs ' });
    }
    try {
      const [response] = await connection.query(blogQueries.addBlog, { text });
      const [blogs] = await connection.query(blogQueries.findBlogById, response.insertId);
      return res.json(blogs[0]);
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  getBlogById: async (req, res) => {
    const { id } = req.params;
    try {
      const [blogs] = await connection.query(blogQueries.findBlogById, id);
      res.status(200).json(blogs[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  deleteBlogById: async (req, res) => {
    const { id } = req.params;
    try {
      await connection.query(blogQueries.deleteBlogById, id);
      const [blogs] = await connection.query(blogQueries.findAllblogs);
      res.json(blogs);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  updateBlogCompletedById: async (req, res) => {
    const { id } = req.params;
    try {
      const [blogs] = await connection.query(blogQueries.findBlogById, id);
      const foundblog = blogs[0];
      await connection.query(blogQueries.updateblogCompletedById, [!foundblog.completed, id]);
      const [allblogs] = await connection.query(blogQueries.findAllBlogs);
      res.json(allblogs);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
};

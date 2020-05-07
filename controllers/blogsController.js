const moment = require('moment');
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
    const { text, author } = req.body;
    const date = moment().format();
    const dataArr = [author, date, text];
    if (!text || !author) {
      return res.json({ error: 'You must provide text for blogs ' });
    }
    try {
      const [response] = await connection.query(blogQueries.addBlog, dataArr);
      const [blogs] = await connection.query(blogQueries.findBlogById, response.insertId);
      return res.json(blogs[0]);
    } catch (e) {
      console.log(e);
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
      const [blogs] = await connection.query(blogQueries.findAllBlogs);
      res.json(blogs);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  updateBlogTextById: async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    console.log(id)
    console.log(text)
    try {
      await connection.query(blogQueries.updateBlogTextById, [text, id]);
      const [blog] = await connection.query(blogQueries.findBlogById, id); // <---- getting an array back with one array insde of it
      const foundBlog = blog[0];
      res.json(foundBlog);
    } catch (e) {
      console.log("ggr")
      res.status(403).json({ e });
    }
  },
};

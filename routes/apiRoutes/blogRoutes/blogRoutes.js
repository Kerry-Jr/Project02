const router = require('express').Router();
// /api/blogs prepended to every route inside of here
const blogsController = require('../../../controllers/blogsController');

// /api/blogs
router.route('/')
  .get(blogsController.getAllBlogs)
  .post(blogsController.addBlog);

// /api/blogs/:id
router.route('/:id')
  .get(blogsController.getBlogById)
  .delete(blogsController.deleteBlogById)
  .patch(blogsController.updateBlogTextById);

module.exports = router;
const router = require('express').Router();
const blogsController = require('../../../controllers/blogsController');

router.route('/')
  .get(blogsController.getAllBlogs)
  .post(blogsController.addBlog);

router.route('/:id')
  .get(blogsController.getBlogById)
  .delete(blogsController.deleteBlogById)
  .patch(blogsController.updateBlogTextById);

module.exports = router;

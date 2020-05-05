// Get todos
const findAllBlogs = 'SELECT * FROM blogs;';
const findAllCompleted = 'SELECT * FROM blogs WHERE completed = true;';
const findAllIncomplete = 'SELECT * FROM blogs WHERE completed = false;';

const findBlogById = 'SELECT * FROM blogs WHERE id  = ?;';


// Adding Blogs
const addBlog = 'INSERT INTO blogs (author, dates, text) VALUES (?, ?, ?);';


// Deleting Blogs
const deleteBlogById = 'DELETE FROM blogs WHERE id = ?;';

// Updating Blogs
const updateBlogCompletedById = 'UPDATE blogs SET completed = ? WHERE id = ?;';
const updateBlogTextById = 'UPDATE blogs SET text = ? WHERE id = ?;';


module.exports = {
  findAllBlogs,
  findAllCompleted,
  findAllIncomplete,
  findBlogById,
  addBlog,
  deleteBlogById,
  updateBlogTextById,
  updateBlogCompletedById,
};

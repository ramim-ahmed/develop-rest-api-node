const express = require('express');
const { getAllBlogs, addNewBlog, updateBlog, getBlog, deleteBlog } = require('../controllers/blogControllers');
const router = express.Router();

router.route('/').get(getAllBlogs).post(addNewBlog);
router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog);

module.exports = router;
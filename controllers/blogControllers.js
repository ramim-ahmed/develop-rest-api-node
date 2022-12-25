const Blogs = require("../models/blogModel");
const { v4: uuidv4 } = require('uuid');


const getAllBlogs = async (req, res) => {
    try {
        const data = await Blogs.find({}).where({ "disabled": false }).sort({ 'createdAt': "desc" });
        res.status(200).json({
            data,
            message: "Fetch All Blogs",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Fetch failed all blogs",
            success: false
        })
    }
};

const getBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blogs.findOne({ blog_id: id });
        res.status(500).json(blog);
    } catch (error) {
        res.status(500).json({
            message: "Failed get blog",
            success: false,
            error
        });
    }
}

const addNewBlog = async (req, res) => {
    const { cover, title, body, category, author, tags } = req.body;
    console.log(req.body);
    if (cover && title && body && category && author) {
        try {
            const newBlog = new Blogs({
                blog_id: uuidv4(),
                cover,
                title,
                body,
                category,
                author,
                tags
            });
            const blog = await newBlog.save();
            res.status(200).json({
                data: blog,
                message: "Added New Blog",
                success: true
            })
        } catch (error) {
            res.status(500).json({
                message: "Failed new blog added",
                success: false,
                error,
            });
        }
    } else {
        res.status(500).json({
            message: "request invalided",
            success: false
        });
    }
};

const updateBlog = async (req, res) => {
    try {
        const { cover: img, title: headText, body: description, category: category_name, author: authorName, tags: tagsName } = req.body;
        const id = req.params.id;
        const blog = await Blogs.findOne({ blog_id: id });
        const { cover, title, body, category, author, tags } = blog;
        const updatedBlogData = await Blogs.where({ blog_id: id }).update({
            $set: {
                cover: img || cover,
                title: headText || title,
                body: description || body,
                category: category_name || category,
                author: authorName || author,
                tags: tagsName || tags
            }
        });

        res.status(200).json(updatedBlogData)
    } catch (error) {
        res.status(500).json({
            message: 'blog updated failed',
            success: false
        })
    }
};
const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blogs.where({ blog_id: id }).deleteOne({});
        res.status(500).json(blog);
    } catch (error) {
        res.status(500).json({
            message: "Failed delete blog",
            success: false,
            error
        });
    }
}


module.exports = {
    getAllBlogs,
    getBlog,
    addNewBlog,
    updateBlog,
    deleteBlog
}
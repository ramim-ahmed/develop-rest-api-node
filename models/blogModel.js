const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    blog_id: {
        type: String,
        require: true
    },
    cover: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    tags: {
        type: Array,
        default: []
    },
    disabled: {
        type: Boolean,
        default: false
    },
},
    {
        timestamps: true
    }
)



module.exports = mongoose.model('Blog', blogSchema);
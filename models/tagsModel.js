const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagsSchema = new Schema({
    tags_id: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tag', tagsSchema);
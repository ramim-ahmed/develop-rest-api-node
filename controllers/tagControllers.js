const Tags = require("../models/tagsModel");
const { v4: uuidv4 } = require('uuid');
const getAllTags = async (req, res) => {
    try {
        const tags = await Tags.find({});
        res.status(500).json({
            data: tags,
            message: 'get all tags',
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: 'Failed get all tags',
            success: false,
            error,
        })
    };
};

const createTag = async (req, res) => {
    const { title } = req.body;
    if (title) {
        try {
            const newTag = new Tags({
                tags_id: uuidv4(),
                title,
            });
            const data = await newTag.save();
            res.status(200).json({
                message: 'Added new tags',
                success: true,
                data,
            })
        } catch (error) {
            res.status(500).json({
                message: 'Failed create tag',
                success: false,
                error,
            })
        }
    } else {
        res.status(500).json({
            message: "request invalided",
            success: false
        });
    }
}



module.exports = {
    getAllTags,
    createTag,
}
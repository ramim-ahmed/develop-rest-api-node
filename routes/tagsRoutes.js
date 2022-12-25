const express = require('express');
const { getAllTags, createTag } = require('../controllers/tagControllers');
const router = express.Router();

router.route('/').get(getAllTags).post(createTag);

module.exports = router;
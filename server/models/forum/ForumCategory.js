const mongoose = require('mongoose');

const ForumCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    topics: { type: Array, required: false },
    moderators: { type: Array, required: false },
    description: { type: String, required: false }
});

const ForumCategory = module.exports = mongoose.model('ForumCategories', ForumCategorySchema);
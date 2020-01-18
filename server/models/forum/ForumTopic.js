const mongoose = require('mongoose');

const ForumTopicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    moderators: { type: Array, required: false },
    posts: { type: Number, required: false, default: 0 },
    parentCategory: { type: String, required: true }
});

const ForumTopic = module.exports = mongoose.model('ForumTopics', ForumTopicSchema);
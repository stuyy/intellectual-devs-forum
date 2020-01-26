const ForumCategory = require('../models/forum/ForumCategory');
const ForumTopic = require('../models/forum/ForumTopic');
const ForumPost = require('../models/forum/ForumPost');

const createCategory = async (req, res) => {
    let { name } = req.body;
    try {
        let cat = await ForumCategory.findOne({ name });
        console.log(cat);
        if(cat) {
            console.log("Category already exists!");
            res.status(200).json({ msg: 'Already exists' });
        }
        else {
            let saveCategory = await ForumCategory.create({ name });
            await saveCategory.save();
            res.status(201).json({ msg: 'Created!' });
        }
    }
    catch(err) {
        res.status(500).json({ msg: 'error' });
    }
}
const createTopic = async (req, res) => {
    let { name, parentCategory } = req.body;
    try {
        let topic = await ForumTopic.findOne({ name });
        console.log(topic);
        if(topic) {
            console.log("Topic already exists!");
            res.status(200).json({ msg: 'Already exists' });
        }
        else {
            let saveTopic = await ForumTopic.create({ name, parentCategory });
            await saveTopic.save();
            res.status(201).json({ msg: 'Created!' });
        }
    }
    catch(err) {
        res.status(500).json({ msg: 'error' });
    }
}

const getCategories = async (req, res) => {
    try {
        let categories = await ForumCategory.find();
        res.status(200).json(categories);
    }
    catch(err) {
        res.status(500).json({ msg: 'Error' });
    }
}

const getForumTopicsByName = async (req, res) => {
    let { name } = req.params;
    console.log(name);
    try {
        let topics = await ForumTopic.find({ parentCategory: name });
        res.status(200).json(topics);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ msg: 'error' });
    }
}

const getForumPosts = async (req, res) => {
    let { category, topic } = req.params;
    // Find Forum Topic where the parent matches the category 
    try {
        // Find the correct forum topic.
        let forumTopic = await ForumTopic.findOne({ 'name' : { $regex: new RegExp(topic, 'i') }, 'parentCategory': { $regex: new RegExp(category, 'i')}});
        if(forumTopic) { // if Forum Topic exists, get all posts from DB.
            // Find all posts and send them back.
            let forumPosts = await ForumPost.find({ topic: forumTopic.name, category: forumTopic.parentCategory }).sort({ updatedAt: -1 });
            if(forumPosts) {
                res.status(200).json(forumPosts);
            }
            else {
                console.log("Nothing.");
                res.status(500).json({ msg: "Error."})
            }
        }
        else {
            res.status(500).json({ msg: "Error."})
        }
    }
    catch(ex) {
        res.status(500).json({ msg: "Error."})
    }
}

const createForumPost = async (req, res) => {
    console.log(req.body);
    try {
        let post = await ForumPost.create({
            title: req.body.title,
            content: req.body.content,
            author: req.user.username,
            topic: req.body.topic,
            category: req.body.category
        });
        if(post) {
            console.log(post);
            res.status(201).json({ msg: "Success", post })
        }
    }
    catch(ex) {
        console.log(ex);
    }
}

const getForumPostById = async (req, res) => {
    try {
        let post = await ForumPost.findById(req.params.id);
        if(post) {
            res.status(200).json(post);
        }
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ msg: "Error" });
    }
}
module.exports = { createCategory, createTopic, getCategories, getForumTopicsByName, getForumPosts, createForumPost, getForumPostById }
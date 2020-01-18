const ForumCategory = require('../models/forum/ForumCategory');
const ForumTopic = require('../models/forum/ForumTopic');

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
const createTopic = (req, res) => {

}
module.exports = { createCategory, createTopic }
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    discriminator: { type: String, required: true },
    discordId: { type: String, required: true },
    avatar: { type: String, required: true },
    joinedDate: { type: Date, required: true },
    type: { type: String, required: true }
});

const User = module.exports = mongoose.model('Users', UserSchema);
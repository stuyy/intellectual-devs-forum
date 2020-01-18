const router = module.exports = require('express').Router();
const passport = require('passport');
const User = require('../models/User');

router.get('/discord', passport.authenticate('discord'));
router.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    console.log("Good")
});
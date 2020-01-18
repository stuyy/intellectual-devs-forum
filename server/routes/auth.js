const router = module.exports = require('express').Router();
const controller = require('../controllers/auth.controller');
const passport = require('passport');
const User = require('../models/User');

router.get('/discord/login', passport.authenticate('discord'));
router.get('/discord/redirect', passport.authenticate('discord', {
    failureRedirect: '/discord/failure'
}), controller.successRedirect);

router.get('/discord/failure', controller.failureRedirect);
router.get('/logout', controller.logout);
router.get('/authorized', controller.authorized);
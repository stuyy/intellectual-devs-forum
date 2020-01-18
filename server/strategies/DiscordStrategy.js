const DiscordStrategy = require('passport-discord').Strategy
const refresh = require('passport-oauth2-refresh');
const User = require('../models/User');
const passport = require('passport');

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(id, done) {
    done(null, id);
});

var discordStrat = new DiscordStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
    scope: ["identify"]
},
async function(accessToken, refreshToken, profile, done) {
    profile.refreshToken = refreshToken; // store this for later refreshes
    console.log(profile);
    try {
        const user = await User.findOne({ discordId: profile.id });
        if(user)
            return done(null, user);
        else
        {
            let newUser = new User({ 
                username: profile.username,
                discriminator: profile.discriminator,
                discordId: profile.id,
                avatar: profile.avatar,
                joinedDate: new Date() 
            });
            const userSaved = await newUser.save();
            return done(null, userSaved);
        }
    }
    catch(err) {
        console.log(err);
    }
});

passport.use(discordStrat);
refresh.use(discordStrat);
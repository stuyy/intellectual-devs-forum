module.exports.successRedirect = (req, res) => {
    res.send(200);
}
module.exports.failureRedirect = (req, res) => {
    res.send(400);
}

module.exports.logout = (req, res) => {
    if(req.user) {
        console.log("Logging out...");
        req.logout();
        res.redirect('/');
    }
    else {
        console.log("NO session.");
        res.redirect('/');
    }
}

module.exports.authorized = (req, res) => {
    if(req.user) {
        res.send(200);
    }
    else {
        res.send(403);
    }
}
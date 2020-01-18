module.exports.successRedirect = (req, res) => {
    res.redirect('http://localhost:4200/forum');
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
    console.log(req.user);
    if(req.user) {
        console.log("User is authorized.");
        res.status(200).json({ msg: 'Good' })
    }
    else {
        res.status(403).json({ msg: 'Forbidden' })
    }
}
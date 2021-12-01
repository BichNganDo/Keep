const User = require('../models/User.js');
module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        // console.log(req);
        console.log(req.body);
        console.log(error);
        if(error) {
            return res.redirect('/register');
        }
        res.redirect('/')
    })
}


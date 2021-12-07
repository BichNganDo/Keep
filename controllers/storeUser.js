const User = require('../models/User.js');
const path = require("path");
module.exports = (req, res) => {
    if(!!req.files){
        let image = req.files.image;
        image.mv(
            path.resolve(__dirname, "../public/avatar", image.name),
            function (error) {
                User.create(
                {
                  ...req.body,
                  image: "/avatar/" + image.name,
                },
                function (err) {
                  res.redirect("/");
                }
              );
            }
        );

    } else {
        User.create({
            email: req.body.email,
            password: req.body.password
        }, function(error){
            res.redirect("/");
        })
    }
    
};
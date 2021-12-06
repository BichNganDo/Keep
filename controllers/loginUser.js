const bcrypt = require("bcrypt");
const User = require("../models/User");
module.exports = (request, response) => {
  const { email, password, image } = request.body;
  // console.log(request.body);
  User.findOne({ email: email }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          // if passwords match
          // store user session, will talk about it later
          request.session.userId = user._id
          request.session.image = user.image
          response.redirect('/')
        } else {
            response.redirect('/login')
        }
      });
    } else {
        response.redirect('/login')
    }
  });
};
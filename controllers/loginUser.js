const bcrypt = require("bcrypt");
const User = require("../models/User");
module.exports = (request, response) => {
  const { email, password } = request.body;
  User.findOne({ email: email }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) {
          // if passwords match
          // store user session, will talk about it later
          request.session.userId = user._id
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
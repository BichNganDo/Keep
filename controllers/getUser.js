const User = require("../models/User.js");
module.exports = (request, response) => {
    User.findById(request.session.userId, function (error, detailUser) {
    response.render("index", {
        detailUser,
    });
  });
};

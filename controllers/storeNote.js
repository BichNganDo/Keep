const Note = require("../models/Note.js");
const path = require("path");
module.exports = (request, response) => {
  console.log("create");
  console.log(__dirname);
  if(!!request.files){
    let image = request.files.image;
    let idUser = request.session.userId;
    image.mv(
      path.resolve(__dirname, "../public/upload", image.name),
      function (error) {
          Note.create(
          {
            ...request.body,
            image: "/upload/" + image.name,
            idUser: idUser,
          },
          function (err) {
            response.redirect("/");
          }
        );
      }
    );
  } else {
    let idUser = request.session.userId;
    Note.create({
      idUser: idUser,
      body: request.body.body,
      title: request.body.title
    }, function(error){
      response.redirect("/");
    })
      
  }
  
};
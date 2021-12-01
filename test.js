var util = require("util");
const utf8Encoder = new util.TextEncoder();
const utf8Decoder = new util.TextDecoder("utf-8", { ignoreBOM: true });

const mongoose = require("mongoose");
const Note = require("./models/Note");

mongoose.connect("mongodb://localhost/database_keep", {
  useNewUrlParser: true,
});

// lay du lieu tu MongoDB có điều kiện
Note.find(
  {
    idUser: "61a72d62b85c5d7dc5e61c74",
  },
  (error, note) => {
    console.log(error, note);
  }
);
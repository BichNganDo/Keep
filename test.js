var util = require("util");
const utf8Encoder = new util.TextEncoder();
const utf8Decoder = new util.TextDecoder("utf-8", { ignoreBOM: true });

const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb://localhost/database_keep", {
  useNewUrlParser: true,
});

// lay du lieu tu MongoDB có điều kiện
User.find(
  {
    _id: "61a72d62b85c5d7dc5e61c74",
  },
  (error, user) => {
    console.log(error, user);
  }
);
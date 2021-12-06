var util = require("util");
const utf8Encoder = new util.TextEncoder();
const utf8Decoder = new util.TextDecoder("utf-8", { ignoreBOM: true });

const mongoose = require("mongoose");
const Note = require("./models/Note");

mongoose.connect("mongodb://localhost/database_keep", {
  useNewUrlParser: true,
});

// lay du lieu tu MongoDB có điều kiện
// User.find(
//   {

//     // $or: [
//     //   {title: {$regex: 'Javascript'}}, 
//     //   {body: {$regex: 'Javascript'}}
//     // ]
//     //ObjectId("61a72d48b85c5d7dc5e61c72")Ngan
//     //ObjectId("61a840a953947c3fbd6a1e7e")Meo

//     $and: [ { idUser: '61a72d48b85c5d7dc5e61c72' }, {  $or: [
//       {title: {$regex: null, $options : 'i'}}, 
//       {body: {$regex: null, $options : 'i'}}
//     ] } ]

//   },
//   (error, user) => {
//     console.log(error, user);
//   }
// );

//delete 61a7889372c84ce596cdb9e5
// console.log("dsds");
// Note.deleteOne({_id: '61a7889372c84ce596cdb9e5'},
//   function(error) {
//       console.log("dsadsadsa",error);
//   }
// );

//getBy Id ObjectId("61a7753f46fe7ec5be99cd59")
// Note.findById(
//   '61a7753f46fe7ec5be99cd59'
// , (error, note) => {
//       console.log(error, note);
//     }
// );

//update
// Note.updateOne(
//   {_id: '61a72d48b85c5d7dc5e61c72'}, 
//   {$set: 
//       {
//           title: "Edited Luc Ngan", 
//           body: "Edited", 
//           image: ""
//       },
//   }
// , (error, note) => {
//   console.log(error, note);
// });
//ObjectId("61addf241a36e835ade43b1f")

Note.findByIdAndUpdate(
  '61ae08baadcd6c6037858e29', 
  {
      title: 'Ngan edit', 
      body: 'Ngan edit Ngan eidt', 
      image: ''
  }
  , (error, note) => {
      console.log(error, note);
    });

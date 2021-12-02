const express = require('express');
const app = new express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

//Đăng ký thư mục public
app.use(express.static("public"));

const fileUpload = require("express-fileupload");
app.use(fileUpload());

//express session
const expressSession = require("express-session");
app.use(
  expressSession({
    secret: "nganluc meo",
  })
);

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/database_keep", { useNewUrlParser: true });

global.loggedIn = null; //khai báo một biến loggedIn kiểu global, mục đích là có thể truy cập biến này trong các file EJS.
app.use("*", (request, response, next) => {
  loggedIn = request.session.userId;
  next()
});

global.isImage = ""; 
app.use("*", (request, response, next) => {
  isImage = request.body.image;
  next()
});

const homeController = require("./controllers/getNote");
app.get("/", homeController);

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/login', (req, res) => {
    res.render('login');
})

//Register
const newUserController = require("./controllers/register");
app.get("/register", newUserController);

const storeUserController = require("./controllers/storeUser");
app.post("/users/register", storeUserController);

//login
const loginController = require("./controllers/login");
app.get("/login", loginController);

const loginUserController = require("./controllers/loginUser");
app.post("/users/login", loginUserController);

//Create note
const newNoteController = require("./controllers/newNote");
app.get("/index" ,newNoteController);

const storeNoteController = require("./controllers/storeNote");
app.post("/notes/store", storeNoteController);

//logout
const logoutController = require('./controllers/logout');
app.get("/logout", logoutController);







app.listen(4000, () => {
    console.log("Port 4000");
  });
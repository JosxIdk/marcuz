const express = require('express');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const engine = require('ejs-mate')
const path = require("path");
const flash = require('connect-flash');
const fileUpload = require('express-fileupload')
const app = express();

app
  .set("port", process.env.PORT || 80)
  .use("/public",express.static("public"))
  .use(cookieParser())
  .use(
    session({
      secret: "dashboardfeliz",
      resave: false,
      saveUninitialized: false,
    })
  )
  .use(flash())
  .use(fileUpload())
  .use(express.json())
  .use(express.urlencoded({
    extended: true
  }))
  .set("views", path.join(__dirname, "../views"))
  .set("view engine", "ejs")
  .engine("ejs", engine)
  .use((req, res, next) => {
    app.locals.ok = req.flash('ok');
    next();
  })
  .use("/", require("../routes/routes"));

module.exports = app;
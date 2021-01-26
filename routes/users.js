const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");
const users = require("../controllers/users");
const catchAsync = require("../utils/catchAsync");

router
  .route("/register")
  .get(users.renderRegister)
  .post(catchAsync(users.register));

router
  .route("/login")
  .get(users.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    users.login
  );
  
//router.get("/register", users.renderRegister);

//router.post("/register", catchAsync(users.register));

// router.get("/login", users.renderLogin);

//passport middleware를 통한 검증
// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureFlash: true,
//     failureRedirect: "/login",
//   }),
//   users.login
// );

router.get("/logout", users.logout);

module.exports = router;

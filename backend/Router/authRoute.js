const express = require("express");
const authController = require("./../Controller/authController");

const authRoute = express.Router();
authRoute.route("/sign-in").post(authController.signIn);
authRoute.route("/sign-up").post(authController.signUp);
authRoute.route("/forget-password").post(authController.forgetPassword);
authRoute
  .route("/resetPassword/:resetToken")
  .patch(authController.resetPassword);
module.exports = authRoute;

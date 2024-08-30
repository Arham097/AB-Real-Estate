const express = require("express");
const authController = require("./../Controller/authController");

const authRoute = express.Router();
authRoute.route("/sign-in").post(authController.signIn);
authRoute.route("/sign-up").post(authController.signUp);

module.exports = authRoute;

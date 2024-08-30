const express = require("express");
const app = express();
const authRoute = require("./Router/authRoute");
app.use(express.json());

app.use("/api/auth", authRoute);

module.exports = app;
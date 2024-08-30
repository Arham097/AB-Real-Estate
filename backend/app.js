const express = require("express");
const app = express();
const authRoute = require("./Router/authRoute");
const houseRoute = require("./Router/houseRoute");
const cors = require("cors");

app.use(cors());

app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/house", houseRoute)

module.exports = app;
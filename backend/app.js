const express = require("express");
const app = express();
const authRoute = require("./Router/authRoute");
const houseRoute = require("./Router/houseRoute");
const cors = require("cors");
const morgan = require("morgan");
const globalErrorHandler = require("./Controller/errorController");
const cookieParser = require("cookie-parser");

app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/auth", authRoute);
app.use("/api/house", houseRoute);
app.use(globalErrorHandler);

module.exports = app;

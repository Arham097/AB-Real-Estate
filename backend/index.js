const dotenv = require("dotenv");
dotenv.config({ path: "./Config/config.env" });
const app = require("./app");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database has been connected");
  })
  .catch(() => {
    console.log("Database has not been connected");
  });
app.listen(process.env.PORT, () => {
  console.log("Server has been started on localhost:3000");
});
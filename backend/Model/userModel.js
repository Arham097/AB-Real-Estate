const mongoose = require("mongoose");
const validate = require("validate");
const crypto = require("crypto");

const userShema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Username is a required field"],
    },
    email: {
      type: String,
      require: true,
      unique,
      lowercase,
      validate: [validate.isEmail, "Please enter valid E-mail"],
    },
    password: {
      type: String,
      require: [true, "Password is a required field"],
    },
    confirmPassword: {
      type: String,
      require: [true, "Confirm Password is a required field"],
      validate: {
        validator: function (val) {
          this.password === val;
        },
        message: "Password and confirmPassword does not match",
      },
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model("user", userShema);
userModel.methods.createResetPasswordToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  this.passwordResetTokenExpires = Date.now() + 10 * 60 * 60 * 1000;
  return token;
};
module.exports = userModel;

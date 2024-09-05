const mongoose = require("mongoose");
const validate = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Username is a required field"],
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
      validate: [validate.isEmail, "Please enter valid E-mail"],
    },
    password: {
      type: String,
      require: [true, "Password is a required field"],
      select: false,
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
    passwordChangedAt: Date,
    passwordResetToken: {
      type: String,
    },
    passwordResetTokenExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);
userSchema.methods.createResetPasswordToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  this.passwordResetTokenExpires = Date.now() + 10 * 60 * 60 * 1000;
  return token;
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
  next();
});
userSchema.methods.comparePassword = async function (userPass, passDB) {
  return await bcrypt.compare(userPass, passDB);
};

userSchema.methods.isPasswordChanged = function (JWTtimestamp) {
  if (this.passwordChangedAt) {
    const passChangedTS = parseInt(this.passwordChangedAt.getTime() / 1000, 10);

    return JWTtimestamp < passChangedTS;
  }
  return false;
};

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;

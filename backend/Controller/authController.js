const User = require("./../Controller/authController");
const CustomErrors = require("./../Utils/CustomErrors");
const crypto = require("crypto");

const createSendResponse = () => {};
exports.signIn = async (req, res, next) => {};
exports.signUp = async (req, res, next) => {};

exports.forgetPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(new CustomErrors("User not found", 404));
    }
    const resetToken = user.createResetPasswordToken();
    await user.save({ validateeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/resetPassword/${resetToken}`;
    const message = `We have received a password reset request. Please use the below link to  reset your password \n\n ${resetUrl}\n\n This password link will be valid only for 10 minutes`;
    try {
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetTokenExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return next(
        new CustomErrors(
          "There was an error in sending reset password email! Please try again later",
          500
        )
      );
    }
  } catch (err) {
    next(err.message);
  }
};
exports.resetPassword = async (req, res, next) => {
  const token = req.params.resetToken;
  if (!token) {
    return next();
  }
  const resetToken = crypto.createHash("sha256").update(token).digest("hex");
  try {
    const user = await User.findOne({
      passwordResetToken: token,
      passwordResetTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return next(new CustomErrors("Token is invalid or has expired", 404));
    }
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;

    await user.save();
    createSendResponse(user, 201, res);
  } catch (err) {
    next(err.message);
  }
};

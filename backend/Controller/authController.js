const User = require("./../Model/userModel");
const CustomErrors = require("./../Utils/CustomErrors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const util = require('util');



const signupToken = id => {
  return jwt.sign({ id }, process.env.SECRET_STRING, {
    expiresIn: process.env.LOGIN_EXPIRES
  })
}
const options = {
  maxAge: process.env.LOGIN_EXPIRES,
  httpOnly: true
}
if (process.env.NODE_ENV === 'production') {
  options.secure = true;
}
const createSendToken = (user, statusCode, res) => {
  const token = signupToken(user._id);
  res.cookie('jwt', token, options);
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  })
};

exports.signUp = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    createSendToken(newUser, 201, res);
  }
  catch (err) {
    if (err === "ValidationError") {
      const error = new CustomErrors("Invalid data", 400);
      return next(error);
    }
    if (err.code === 11000) {
      return next(new CustomErrors("User already exists with this Email", 400));
    };
    const error = new CustomErrors("Something went wrong", 500);
    return next(error);
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new CustomErrors("Please provide email and password", 400);
      return next(error);
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password, user.password))) {
      const error = new CustomErrors("Invalid email or password", 401);
      return next(error);
    }
    createSendToken(user, 200, res);
  }
  catch (err) {
    const error = new CustomErrors("Something went wrong", 500);
    return next(error);
  };
};


exports.protect = async (req, res, next) => {
  // 1. Read the token & check if it is exist or not
  let token = req.cookies.jwt;
  if (!token) {
    const error = new CustomErrors("You are not logged in ! Please login to get access", 401);
    next(error);
  }
  // 2. Validate the Token
  const decodedToken = await util.promisify(jwt.verify)(token, process.env.SECRET_STRING);

  //  3. Check if uset still exist in DB or not
  const user = await User.findById(decodedToken.id);
  if (!user) {
    const error = new CustomErrors("User with this token does not exist, 401");
    next(error);
  }

  // 4. Check if user changed the password after the token was issued or not
  const isPasswordChanged = await user.isPasswordChanged(decodedToken.iat);
  if (isPasswordChanged) {
    const error = new CustomError('Password has been changed recently, pleae login again', 401);
    next(error);
  }

  // 5. Allow Access to protected route.
  req.user = user;
  next();
}

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

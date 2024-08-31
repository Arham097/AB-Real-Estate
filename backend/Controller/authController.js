const User = require("./../Model/userModel");
const CustomErrors = require("./../Utils/CustomErrors");
const jwt = require("jsonwebtoken");

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
exports.forgetPassword = async (req, res, next) => { };
exports.resetPassword = async (req, res, next) => { };

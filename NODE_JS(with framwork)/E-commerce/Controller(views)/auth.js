const tryCatchHandler = require("../utitls/CatchHandler");
const User = require("../Models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config.env" });
const { promisify } = require("util");

// jwt sign

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_ACCESS_SCERET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.AccessToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expire: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  // if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("Token", token, cookieOptions);

  // Remove password from output
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    // data: {
    //   user,
    // },
  });
};

// Middelware to check is user Authenitcated
exports.IsAuthenticated = tryCatchHandler(async (req, res, next) => {
  let token = "";
  if (
    req.headers.authorization ||
    req.headers.authorization.startswith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookie.token) {
    token = req.cookie.token;
  } else {
    return next(new Error("You need to be login first ...!", 404));
  }
  const decoded = await promisify(jwt.verify)(
    token,
    process.env.JWT_ACCESS_SCERET_KEY
  );

  const CurrentUser = await User.findById(decoded.id);
  if (!CurrentUser) {
    return next(new Error("This IS not valid user !"));
  }
  res.user = CurrentUser;
  next();
});

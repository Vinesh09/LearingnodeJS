const User = require("../Models/user");
const tryCatchHandler = require("../utitls/CatchHandler");
const { AccessToken } = require("../Controller(views)/auth");

// get user
exports.getUser = tryCatchHandler(async (req, res, next) => {
  id = req.query.id ? req.query.id : "";
  const objs = await (id ? User.findById(id) : User.find());
  res.status(200).json({
    message: "success",
    count: objs.length,
    data: objs,
  });
});

// Create / Signup User
exports.createUser = tryCatchHandler(async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.status(201).json({
    data: newUser,
    message: "data created successfully !",
  });
});

// Login Viwe
exports.login = tryCatchHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new Error("Please provide email and password!"));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new Error("Incorrect email or password"));
  }
  user.password = undefined;
  // 3) If everything ok, send token to client
  AccessToken(user, 200, res);
});

// update user
exports.updateUser = tryCatchHandler(async (req, res, next) => {
  id = req.params.id ? req.params.id : "";
  const obj = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "success",
    data: obj,
  });
});

exports.deleteUser = tryCatchHandler(async (req, res, next) => {
  id = req.params.id ? req.params.id : "";
  const userObj = await User.findByIdAndUpdate(req.id, { is_active: false });
  res.status(200).json({
    message: "data delete successfully..!",
  });
});

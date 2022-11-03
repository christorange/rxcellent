const { successResponse } = require("../service/ResponseWrapper");
const { createCustomError } = require("../middleware/custom-error");
const { User } = require("../model/UserModel");

// REGISTER USER
const register = async (req, res, next) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    successResponse(res, user);
  } catch (err) {
    return next(createCustomError(err));
  }
};

// GET ALL USERS
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    successResponse(res, users);
  } catch (err) {
    return next(createCustomError(err));
  }
};

module.exports = {
  getAllUsers,
  register,
};

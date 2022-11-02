const { successResponse } = require("../service/ResponseWrapper");
const { createCustomError } = require("../middleware/custom-error");
const { User } = require("../model/UserModel");

// GET ALL ITEMS
const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    successResponse(res, users);
  } catch (err) {
    return next(createCustomError(err));
  }
};

module.exports = {
  getAllUser,
};

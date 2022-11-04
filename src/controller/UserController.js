const { successResponse } = require("../service/ResponseWrapper");
const { createCustomError } = require("../middleware/custom-error");
const bcrypt = require("bcrypt");
const {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  EMAIL_VERIFY_REG,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} = require("../tools/enum");
const { User } = require("../model/UserModel");

// REGISTER USER
/*
  status = 1: success:
  status = 0: fail
*/
const register = async (req, res, next) => {
  try {
    const queryObj = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const user = await User.create(queryObj);
    successResponse(res, { status: 1, message: REGISTER_SUCCESS });
  } catch (err) {
    successResponse(res, { status: 0, message: REGISTER_ERROR });
  }
};

// POST ALL USERS
/*
* status = 1: success:
  status = 0: fail
 */

const login = async (req, res, next) => {
  try {
    const user_email = req.body.user_email;
    const pwd = req.body.password;
    const email_reg = new RegExp(EMAIL_VERIFY_REG);

    const option = email_reg.test(user_email)
      ? { email: user_email }
      : { username: user_email };
    const users = await User.findOne(option);

    console.log(LOGIN_ERROR, LOGIN_SUCCESS);
    if (users == null) {
      successResponse(res, { status: 0, message: LOGIN_ERROR });
      return;
    }

    const pwdMatchFlag = bcrypt.compareSync(pwd, users.password); // compare request pwd and database

    if (pwdMatchFlag) {
      successResponse(res, { status: 1, message: LOGIN_SUCCESS });
    } else {
      successResponse(res, { status: 0, message: LOGIN_ERROR });
    }
  } catch (err) {
    console.log(err);
    return next(createCustomError(err));
  }
};

module.exports = {
  login,
  register,
};

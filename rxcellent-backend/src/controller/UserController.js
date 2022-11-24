const { successResponse } = require('../util/ResponseWrapper');
const { createCustomError } = require('../middleware/custom-error');
const bcrypt = require('bcrypt');
const {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    EMAIL_VERIFY_REG,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    PASSWORD_SUCCESS,
    PASSWORD_ERROR
} = require('../tools/enum');
const { User } = require('../model/UserModel');

// REGISTER USER
/*
  status = 1: success:
  status = 0: fail
  idenity = 0: normal user
  idenity = 1: doctor
*/
const register = async (req, res, next) => {
    try {
        const queryObj = {
            username: req.body.username,
            email: req.body.email,
            idenity: req.body.idenity,
            password: req.body.password
        };
        await User.create(queryObj);
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
        const idenity = req.body.idenity;
        const email_reg = new RegExp(EMAIL_VERIFY_REG);

        let options = { idenity: idenity };
        options = email_reg.test(user_email)
            ? { ...options, email: user_email }
            : { ...options, username: user_email };
        const users = await User.findOne(options);

        if (users == null) {
            successResponse(res, { status: 0, message: LOGIN_ERROR });
            return;
        }

        const pwdMatchFlag = bcrypt.compareSync(pwd, users.password); // compare request pwd and database
        console.log(pwdMatchFlag);

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

// CHANGE PASSWORD
/*
  status = 1: success:
  status = 0: fail
*/
const modifyPassword = async (req, res, next) => {
    try {
        const queryObj = {
            password: req.body.password,
            updateTime: Date.now()
        };
        await User.findOneAndUpdate({ email: req.body.email }, queryObj);
        successResponse(res, { status: 1, message: PASSWORD_SUCCESS });
    } catch (err) {
        successResponse(res, { status: 0, message: PASSWORD_ERROR });
    }
};

module.exports = {
    login,
    register,
    modifyPassword
};

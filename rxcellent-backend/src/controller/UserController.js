const { successResponse } = require('../util/ResponseWrapper');
const { createCustomError } = require('../middleware/custom-error');
const bcrypt = require('bcrypt');
const {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    PASSWORD_SUCCESS,
    PASSWORD_ERROR
} = require('../tools/enum');
const { User } = require('../model/UserModel');
const { generateToken } = require('../tools/authorization');

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
        const username = req.body.username;
        const pwd = req.body.password;
        const idenity = req.body.idenity;
        const token = generateToken({
            username: username,
            id: new Date().getDate(),
            idenity: idenity
        });

        let options = { idenity: idenity, username: username };
        const users = await User.findOne(options);

        if (users == null) {
            successResponse(res, { status: 0, message: LOGIN_ERROR });
            return;
        }
        const pwdMatchFlag = bcrypt.compareSync(pwd, users.password); // compare request pwd and database

        if (pwdMatchFlag) {
            successResponse(res, {
                status: 1,
                message: LOGIN_SUCCESS,
                token: token,
                username: users.username,
                idenity: users.idenity,
                email: users.email
            });
        } else {
            successResponse(res, { status: 0, message: LOGIN_ERROR });
        }
    } catch (err) {
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

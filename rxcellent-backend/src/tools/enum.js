const LOGIN_ERROR = 'username or password is error';
const LOGIN_SUCCESS = 'login success';
const REGISTER_ERROR = 'username or email had been registered';
const REGISTER_SUCCESS = 'register success';
const PASSWORD_ERROR = 'password modification failed';
const PASSWORD_SUCCESS = 'change modification success';
const INVALID_TOKEN = 'invalid token';
const EMAIL_VERIFY_REG = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';

module.exports = {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    EMAIL_VERIFY_REG,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    PASSWORD_ERROR,
    PASSWORD_SUCCESS,
    INVALID_TOKEN
};

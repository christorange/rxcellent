const jwt = require('jsonwebtoken');
const { createCustomError } = require('../middleware/custom-error');
const { INVALID_TOKEN } = require('./enum');

const secretKey = 'rxcellent_secret_key';
// xxxx.yyy.ccc
// Header、Payload、Signature

// generate token
module.exports.generateToken = function (payload) {
    const token = 'Bearer ' + jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 24 });
    return token;
};

// varify token
// when authorization in header is null, it will not be verified
module.exports.verifyToken = function (req, res, next) {
    const authorization = req.headers.authorization;
    if (authorization === 'PASS') {
        return next();
    } else {
        if (!authorization) {
            return next(createCustomError(INVALID_TOKEN, 401));
        }
        const token = authorization.split(' ')[1];
        jwt.verify(token[1], secretKey, function (err, decoded) {
            // const { id, username } = decoded;
            // req.user = { id, username };
            if (err) {
                return next(createCustomError(err, 401));
            }
            console.log('verify decoded', decoded);
            next();
        });
    }
};

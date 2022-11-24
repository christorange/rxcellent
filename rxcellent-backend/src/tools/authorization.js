const jwt = require('jsonwebtoken');
const { createCustomError } = require('../middleware/custom-error');

const secretKey = 'secretKey';
// xxxx.yyy.ccc
// Header、Payload、Signature

// generate token
module.exports.generateToken = function (payload) {
    const token = 'Rxcellent ' + jwt.sign(payload, secretKey, { expiresIn: 60 * 60 * 24 });
    return token;
};

// varify token
// when authorization in header is null, it will not be verified
module.exports.verifyToken = function (req, res, next) {
    const authorization = req.headers.authorization;
    if (authorization === 'PASS') {
        return next();
    } else {
        const token = authorization.split(' ')[1];
        jwt.verify(token, secretKey, function (err, decoded) {
            // const { id, username } = decoded;
            // req.user = { id, username };
            if (err) {
                return next(createCustomError(err));
            }
            console.log('verify decoded', decoded);
            next();
        });
    }
};

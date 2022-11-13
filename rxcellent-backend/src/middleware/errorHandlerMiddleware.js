const { CustomAPIError } = require('./custom-error');
const { errorResponse } = require('../util/ResponseWrapper');
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return errorResponse(res, err.message, err.code);
    }
    return errorResponse(res, err.message);
};

module.exports = errorHandlerMiddleware;

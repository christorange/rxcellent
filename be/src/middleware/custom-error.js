class CustomAPIError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

/**
 *
 * message: String
 * code: Number
 *
 */

const createCustomError = (message, code = 500) => {
    return new CustomAPIError(message, code);
};

module.exports = { createCustomError, CustomAPIError };

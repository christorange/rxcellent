const successResponse = (res, data, stat = 200, message = 'SUCCESS') => {
    res.status(stat).json({
        status: stat,
        message: message,
        data: data
    });

    return res;
};

const errorResponse = (res, message, stat = 500) => {
    res.status(stat).json({
        status: stat,
        message,
        data: 'Not available'
    });
    return res;
};

module.exports = { successResponse, errorResponse };

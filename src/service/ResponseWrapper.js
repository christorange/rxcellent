const successResponse = (res, data, stat = 200) => {
  res.status(stat).json({
    status: stat,
    message: "SUCCESS",
    data: data,
  });
  return res;
};

const errorResponse = (res, data, stat = 500) => {
  res.status(stat).json({
    status: stat,
    message: "network is error, please try again!",
    data: data,
  });
  return res;
};

module.exports = { successResponse, errorResponse };

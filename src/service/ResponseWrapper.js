const formatResponse = (res, stat, data) => {
  res.status(stat).json({
    status: stat,
    message: stat === 200 ? "success" : data,
    data: stat === 200 ? data : {},
  });
};

module.exports = { formatResponse };

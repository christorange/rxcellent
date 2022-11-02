const { Item } = require("../model/ItemModel");

const validatePrescriptionType = (req, res, next) => {
  if (!req.query.type) {
    res.status(200).json({
      status: 200,
      message: `Query parameter 'type' is missing.`,
      data: "Not available",
    });
  } else if (
    !Item.schema.paths["prescription"].enumValues.includes(req.query.type)
  ) {
    res.status(200).json({
      status: 200,
      message: `Query parameter 'type' should be in [${Item.schema.paths["prescription"].enumValues}]`,
      data: "Not available",
    });
  } else {
    next();
  }
};

module.exports = { validatePrescriptionType };

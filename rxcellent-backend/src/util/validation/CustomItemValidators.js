const { Item } = require("../../model/ItemModel");
const { errorResponse } = require("../ResponseWrapper");

// This acts like a Validator subclass for "prescription" type based Item requests
const prescription = function () {
  this.validate = function (req, res) {
    valid = true;
    if (!req.query.type) {
      message = `Query parameter 'type' is missing.`;
      errorResponse(res, message, 200);
      valid = false;
    } else if (
      !Item.schema.paths["prescription"].enumValues.includes(req.query.type)
    ) {
      message = `Query parameter 'type' should be in [${Item.schema.paths["prescription"].enumValues}]`;
      errorResponse(res, message, 200);
      valid = false;
    }
    return valid;
  };
};

// This acts like a Validator subclass for "category" type based Item requests
const category = function () {
  this.validate = (req, res) => {
    valid = true;
    if (!req.query.name) {
      message = `Query parameter 'name' is missing.`;
      errorResponse(res, message, 200);
      valid = false;
    }
    return valid;
  };
};

// This acts like a Validator subclass for "brand" type based Item requests
// Since brand type validation is the same as category type (as now),
// categroy is assigned to brand
const brand = category;

// This acts like a Validator subclass for "price" type based Item requests
const price = function () {
  this.validate = (req, res) => {
    valid = true;
    message = "";
    if (!req.body.low) {
      message = `Parameter 'low' is missing in the payload.`;
      valid = false;
    } else if (!req.body.high) {
      message = `Parameter 'high' is missing in the payload.`;
      valid = false;
    } else if (!(Math.sign(req.body.low) === 1)) {
      message = `Parameter 'low' should be a positive number.`;
      valid = false;
    } else if (!(Math.sign(req.body.high) === 1)) {
      message = `Parameter 'high' should be a positive number.`;
      valid = false;
    }
    if (valid === false) errorResponse(res, message, 200);
    return valid;
  };
};

module.exports = { prescription, category, brand, price };

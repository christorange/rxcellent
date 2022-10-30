const { formatResponse } = require("../service/ResponseWrapper");
const { Item } = require("../model/ItemModel");

// GET ALL ITEMS
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    formatResponse(res, 200, items);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

// GET ITEMS BY PRESCRIPTION TYPE
const getItemsByPrescriptionType = async (req, res) => {
  try {
    const items = await Item.find({
      prescription: req.query.type,
    });
    formatResponse(res, 200, items);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

//GET ONE ITEM BY KEY
const getItemByKey = async (req, res) => {
  try {
    const item = await Item.findOne({
      key: req.params.key,
    });
    formatResponse(res, 200, item);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

//GET ITEMS BY CATEGORY
const getItemsByCategory = async (req, res) => {
  try {
    const items = await Item.find({
      category: req.query.name,
    });
    formatResponse(res, 200, items);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

//GET ITEMS BY BRAND
const getItemsByBrand = async (req, res) => {
  try {
    const items = await Item.find({
      brand_names: req.query.name,
    });
    formatResponse(res, 200, items);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

// GET ITEMS BY KEYWORD (searchbar)
const getItemsByKeyword = async (req, res) => {
  try {
    const items = await Item.find({
      $or: [
        {
          brand_names: { $regex: ".*" + req.query.text + ".*", $options: "i" },
        },
        { names: { $regex: ".*" + req.query.text + ".*", $options: "i" } },
      ],
    });
    formatResponse(res, 200, items);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

// GET ITEMS BY PRICE RANGE
const getItemsByPriceRange = async (req, res) => {
  try {
    const items = await Item.find({
      $and: [
        { price: { $gte: req.body.low } },
        { price: { $lte: req.body.high } },
      ],
    });
    formatResponse(res, 200, items);
  } catch {
    formatResponse(res, 500, err);
  }
};

module.exports = {
  getAllItems,
  getItemsByPrescriptionType,
  getItemByKey,
  getItemsByCategory,
  getItemsByBrand,
  getItemsByKeyword,
  getItemsByPriceRange,
};

const { Item } = require("../model/ItemModel");

// GET ALL ITEMS
const getAllItems = async (req, res) => {
  try {
    let items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ITEMS BY PRESCRIPTION TYPE
const getItemsByPrescriptionType = async (req, res) => {
  try {
    let items = await Item.find({
      prescription: req.query.type,
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ONE ITEM BY KEY
const getItemByKey = async (req, res) => {
  try {
    let item = await Item.findOne({
      key: req.params.key,
    });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ITEMS BY CATEGORY
const getItemsByCategory = async (req, res) => {
  try {
    let items = await Item.find({
      category: req.query.name,
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ITEMS BY BRAND
const getItemsByBrand = async (req, res) => {
  try {
    let items = await Item.find({
      brand_names: req.query.name,
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ITEMS BY KEYWORD (searchbar)
const getItemsByKeyword = async (req, res) => {
  try {
    let items = await Item.find({
      $or: [
        {
          brand_names: { $regex: ".*" + req.query.text + ".*", $options: "i" },
        },
        { names: { $regex: ".*" + req.query.text + ".*", $options: "i" } },
      ],
    });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ITEMS BY PRICE RANGE
const getItemsByPriceRange = async (req, res) => {
  try {
    let items = await Item.find({
      $and: [
        { price: { $gte: req.body.low } },
        { price: { $lte: req.body.high } },
      ],
    });
    res.status(200).json(items);
  } catch {
    res.status(500).json(err);
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

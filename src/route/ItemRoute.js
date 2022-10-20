const { Item } = require("../model/ItemModel");
const router = require("express").Router();

// GET ALL ITEMS
router.get("/", async (req, res) => {
  try {
    let products;
    console.log("request");
    products = await Item.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

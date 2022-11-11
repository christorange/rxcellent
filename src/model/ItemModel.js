const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  names: { type: String, required: true },
  brand_names: { type: String, required: true },
  prescription: {
    type: String,
    required: true,
    enum: ["prescribed", "non-prescribed"],
  },
  category: { type: String },
  img: { type: String },
  price: { type: Number, required: true },
});

const Item = mongoose.model("Item", ItemSchema, "Item");
module.exports = { Item };

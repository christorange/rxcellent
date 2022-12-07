const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    ingredient: { type: String, required: true },
    prescription: {
        type: String,
        required: true,
        enum: ['prescribed', 'non-prescribed']
    },
    category: { type: String },
    img: { type: String },
    price: { type: Number, required: true }
});

const Item = mongoose.model('Item', ItemSchema, 'Item');
module.exports = { Item };

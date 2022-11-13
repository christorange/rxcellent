const { successResponse } = require('../util/ResponseWrapper');
const { createCustomError } = require('../middleware/custom-error');
const { Item } = require('../model/ItemModel');

// GET ALL ITEMS
const getAllItems = async (req, res, next) => {
    try {
        const items = await Item.find();
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

// GET ITEMS BY PRESCRIPTION TYPE
const getItemsByPrescriptionType = async (req, res, next) => {
    try {
        const items = await Item.find({
            prescription: req.query.type
        });
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

//GET ONE ITEM BY KEY
const getItemByKey = async (req, res, next) => {
    try {
        const item = await Item.findOne({
            key: req.params.key
        });
        successResponse(res, item);
    } catch (err) {
        next(createCustomError(err));
    }
};

//GET ITEMS BY CATEGORY
const getItemsByCategory = async (req, res, next) => {
    try {
        const items = await Item.find({
            category: req.query.name
        });
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

//GET ITEMS BY BRAND
const getItemsByBrand = async (req, res, next) => {
    try {
        const items = await Item.find({
            brand_names: req.query.name
        });
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

// GET ITEMS BY KEYWORD (searchbar)
const getItemsByKeyword = async (req, res, next) => {
    try {
        const items = await Item.find({
            $or: [
                {
                    brand_names: { $regex: '.*' + req.query.text + '.*', $options: 'i' }
                },
                { names: { $regex: '.*' + req.query.text + '.*', $options: 'i' } }
            ]
        });
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

// GET ITEMS BY PRICE RANGE
const getItemsByPriceRange = async (req, res, next) => {
    try {
        const items = await Item.find({
            $and: [{ price: { $gte: req.body.low } }, { price: { $lte: req.body.high } }]
        });
        successResponse(res, items);
    } catch {
        next(createCustomError(err));
    }
};

module.exports = {
    getAllItems,
    getItemsByPrescriptionType,
    getItemByKey,
    getItemsByCategory,
    getItemsByBrand,
    getItemsByKeyword,
    getItemsByPriceRange
};

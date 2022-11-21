/* eslint-disable prettier/prettier */
const { successResponse } = require('../util/ResponseWrapper');
const { createCustomError } = require('../middleware/custom-error');
const { Item } = require('../model/ItemModel');

const ITEM_LIMIT = 60;

// GET ALL ITEMS
const getAllItems = async (req, res, next) => {
    try {
        const type = addPrescriptionType(req.url);
        const items = type
            ? await Item.find({ prescription: type }).limit(ITEM_LIMIT)
            : await Item.find().limit(ITEM_LIMIT);
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
        }).limit(ITEM_LIMIT);
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
        }).limit(ITEM_LIMIT);
        successResponse(res, item);
    } catch (err) {
        next(createCustomError(err));
    }
};

//GET ITEMS BY CATEGORY
const getItemsByCategory = async (req, res, next) => {
    try {
        const items = await Item.find({
            category: req.query.name,
            prescription: addPrescriptionType(req.url)
        }).limit(ITEM_LIMIT);
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

//GET ITEMS BY BRAND
const getItemsByBrand = async (req, res, next) => {
    try {
        const items = await Item.find({
            brand_names: req.query.name,
            prescription: addPrescriptionType(req.url)
        }).limit(ITEM_LIMIT);
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

// GET ITEMS BY KEYWORD (searchbar)
const getItemsByKeyword = async (req, res, next) => {
    try {
        const items = await Item.find({
            $and: [
                {
                    $or: [
                        {
                            brand_names: { $regex: '.*' + req.query.text + '.*', $options: 'i' }
                        },
                        { names: { $regex: '.*' + req.query.text + '.*', $options: 'i' } }
                    ]
                },
                { prescription: addPrescriptionType(req.url) }
            ]
        }).limit(ITEM_LIMIT);
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

// GET ITEMS BY PRICE RANGE
const getItemsByPriceRange = async (req, res, next) => {
    try {
        const items = await Item.find({
            $and: [
                {
                    $and: [{ price: { $gte: req.body.low } }, { price: { $lte: req.body.high } }]
                },
                { prescription: addPrescriptionType(req.url) }
            ]
        }).limit(ITEM_LIMIT);
        successResponse(res, items);
    } catch (err) {
        next(createCustomError(err));
    }
};

const addPrescriptionType = (URI) => {
    const pathParts = URI.split('/');
    if (pathParts[1] === '') return null;
    if (pathParts[1] === 'prescribed') return 'prescribed';
    else if (pathParts[1] === 'nonprescribed') return 'non-prescribed';
    else throw createCustomError('Invalid path');
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

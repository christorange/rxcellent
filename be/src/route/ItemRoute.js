const router = require('express').Router();
const itemController = require('../controller/ItemController');

// BOTH
router.get('/', itemController.getAllItems); // GET ALL ITEMS
router.get('/item/:key', itemController.getItemByKey); // GET ONE ITEM BY KEY

// PRESCRIBED
router.get('/prescribed/', itemController.getAllItems); // GET ALL PRESCRIBED ITEMS
router.get('/prescribed/brand', itemController.getItemsByBrand); // GET ITEMS BY BRAND
router.get('/prescribed/category', itemController.getItemsByCategory); // GET ITEMS BY CATEGORY
router.get('/prescribed/keyword', itemController.getItemsByKeyword); // GET ITEMS BY KEYWORD (searchbar)
router.post('/prescribed/price', itemController.getItemsByPriceRange); // GET ITEMS BY PRICE RANGE

// NON-PRESCRIBED
router.get('/nonprescribed', itemController.getAllItems); // GET ALL NONPRESCRIBED ITEMS
router.get('/nonprescribed/brand', itemController.getItemsByBrand); // GET ITEMS BY BRAND
router.get('/nonprescribed/category', itemController.getItemsByCategory); // GET ITEMS BY CATEGORY
router.get('/nonprescribed/keyword', itemController.getItemsByKeyword); // GET ITEMS BY KEYWORD (searchbar)
router.post('/nonprescribed/price', itemController.getItemsByPriceRange); // GET ITEMS BY PRICE RANGE

router.get('/prescription', itemController.getItemsByPrescriptionType); // GET ITEMS BY PRESCRIPTION TYPE

module.exports = router;

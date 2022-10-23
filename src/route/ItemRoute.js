const router = require("express").Router();
const itemController = require("../controller/ItemController");

router.get("/", itemController.getAllItems); // GET ALL ITEMS
router.get("/prescription", itemController.getItemsByPrescriptionType); // GET ITEMS BY PRESCRIPTION TYPE
router.get("/item/:key", itemController.getItemByKey); // GET ONE ITEM BY KEY
router.get("/category", itemController.getItemsByCategory); // GET ITEMS BY CATEGORY
router.get("/brand", itemController.getItemsByBrand); // GET ITEMS BY BRAND
router.get("/keyword", itemController.getItemsByKeyword); // GET ITEMS BY KEYWORD (searchbar)
router.post("/price", itemController.getItemsByPriceRange); // GET ITEMS BY PRICE RANGE

module.exports = router;

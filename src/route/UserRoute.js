const router = require("express").Router();
const itemController = require("../controller/UserController");

router.get("/", itemController.getAllUser); // GET ALL ITEMS

module.exports = router;

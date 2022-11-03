const router = require("express").Router();
const userController = require("../controller/UserController");

router.post("/", userController.register); // REGISTER USER
router.get("/", userController.getAllUsers); // GET ALL USERS

module.exports = router;

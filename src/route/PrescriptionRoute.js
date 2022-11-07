const router = require("express").Router();
const prescriptionController = require("../controller/PrescriptionController");

router.post("/", prescriptionController.createPrescription);
router.get("/", prescriptionController.getPrescription);
router.get("/all", prescriptionController.getAllPrescriptions);

module.exports = router;

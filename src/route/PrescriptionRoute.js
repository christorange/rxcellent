const router = require("express").Router();
const prescriptionController = require("../controller/PrescriptionController");

router.post("/", prescriptionController.createPrescription);
// router.get("/?patient_name={patient_name}&date_of_birth={date_of_birth}", prescriptionController.getPrescription)
router.get(
  "/?patient_name={patient_name}",
  prescriptionController.getPrescription
);
router.get("/patients", prescriptionController.getAllPrescription);

module.exports = router;

const router = require('express').Router();
const prescriptionController = require('../controller/PrescriptionController');

router.post('/', prescriptionController.createPrescription);
router.post('/get', prescriptionController.getPrescription);
router.get('/all', prescriptionController.getAllPrescriptions);
router.post('/delete', prescriptionController.deletePrescription);

module.exports = router;

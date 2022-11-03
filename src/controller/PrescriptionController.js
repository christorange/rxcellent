const { formatResponse } = require("../service/ResponseWrapper");
const { Prescription } = require("../model/PrescriptionModel");

const getPrescription = async (req, res) => {
  try {
    const fullPrescription = await Prescription.findOne({
      prescriptionNumber: req.query.rxNumber,
      patientDateOfBirth: req.query.date_of_birth,
    });
    formatResponse(res, 200, fullPrescription);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

const createPrescription = async (req, res) => {
  const { patientName, patientEmail, patientDateOfBirth } = req.body;
  try {
    const newPrescription = await Prescription.create({
      patientName,
      patientEmail,
      patientDateOfBirth,
    });
    formatResponse(res, 200, newPrescription);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

const getAllPrescription = async (req, res) => {
  const prescriptions = await Prescription.find({});
  formatResponse(res, 200, prescriptions);
};

module.exports = {
  createPrescription,
  getPrescription,
  getAllPrescription,
};

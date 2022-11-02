const { formatResponse } = require("../service/ResponseWrapper");
const { Prescription } = require("../model/PrescriptionModel");

const getPrescription = async (req, res) => {
  try {
    const fullPrescription = await Prescription.findOne({
      patient_name: req.query.patient_name,
      // date_of_birth: req.query.date_of_birth
    });
    formatResponse(res, 200, fullPrescription);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

const createPrescription = async (req, res) => {
  const { patient_name, date_of_birth, medicines } = req.body;
  try {
    const newPrescription = await Prescription.create({
      patient_name,
      date_of_birth,
      medicines,
    });
    formatResponse(res, 200, newPrescription);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

const getAllPrescription = async (req, res) => {
  const prescriptions = await Prescription.find({});
  res.status(200).json(prescriptions);
};

module.exports = {
  getPrescription,
  createPrescription,
  getAllPrescription,
};

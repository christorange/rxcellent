const { formatResponse } = require("../service/ResponseWrapper");
const { Prescription } = require("../model/PrescriptionModel");

const getPrescription = async (req, res) => {
  try {
    const { prescriptionNumber, patientDateOfBirth } = req.query;
    const dob = new Date(patientDateOfBirth);
    const fullPrescription = await Prescription.findOne({
      prescriptionNumber: prescriptionNumber,
      patientDateOfBirth: dob,
    });
    formatResponse(res, 200, fullPrescription);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

const createPrescription = async (req, res) => {
  try {
    const {
      patientName,
      patientEmail,
      patientDateOfBirth: dob,
      patientPhoneNumber,
      medicines,
    } = req.body;

    const patientDateOfBirth = new Date(dob);
    const newPrescription = await Prescription.create({
      patientName,
      patientEmail,
      patientDateOfBirth,
      patientPhoneNumber,
      medicines,
    });

    formatResponse(res, 200, newPrescription);
  } catch (err) {
    formatResponse(res, 500, err);
  }
};

const getAllPrescriptions = async (req, res) => {
  const prescriptions = await Prescription.find({});
  formatResponse(res, 200, prescriptions);
};

module.exports = {
  createPrescription,
  getPrescription,
  getAllPrescriptions,
};

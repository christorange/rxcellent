const { successResponse } = require("../util/ResponseWrapper");
const { createCustomError } = require("../middleware/custom-error");
const { Prescription } = require("../model/PrescriptionModel");

const getPrescription = async (req, res, next) => {
  try {
    const { prescriptionNumber, patientDateOfBirth } = req.query;
    const dob = new Date(patientDateOfBirth);
    const fullPrescription = await Prescription.findOne({
      prescriptionNumber: prescriptionNumber,
      patientDateOfBirth: dob,
    });
    successResponse(res, fullPrescription, 200);
  } catch (err) {
    next(createCustomError(err));
  }
};

const createPrescription = async (req, res, next) => {
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

    successResponse(res, newPrescription, 200);
  } catch (err) {
    next(createCustomError(err));
  }
};

const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({});
    successResponse(res, prescriptions, 200);
  } catch (err) {
    next(createCustomError(err));
  }
};

const deletePrescription = async (req, res, next) => {
  try {
    const prescriptions = await Prescription.findOneAndDelete({
      prescriptionNumber: req.body.prescriptionNumber,
    });
    successResponse(res, prescriptions, 200, "PRESCRIPTION DELETED");
  } catch (err) {
    next(createCustomError(err));
  }
};

module.exports = {
  createPrescription,
  getPrescription,
  getAllPrescriptions,
  deletePrescription,
};

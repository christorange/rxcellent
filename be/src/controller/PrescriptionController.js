const { successResponse } = require('../util/ResponseWrapper');
const { createCustomError } = require('../middleware/custom-error');
const { Prescription } = require('../model/PrescriptionModel');
const { sendPrescriptionEmail } = require('../tools/sendPrescription');

const getPrescription = async (req, res, next) => {
    try {
        const { prescriptionNumber, patientDateOfBirth } = req.body;
        const dob = new Date(patientDateOfBirth);
        const fullPrescription = await Prescription.findOne({
            prescriptionNumber: prescriptionNumber,
            patientDateOfBirth: dob
        });
        successResponse(res, fullPrescription, 200);
    } catch (err) {
        next(createCustomError(err));
    }
};

const createPrescription = async (req, res, next) => {
    try {
        const {
            patientFirstName,
            patientMiddleName,
            patientLastName,
            patientEmail,
            patientPhoneNumber,
            patientDateOfBirth: dob,
            patientPrescriptionExpiration: expiration,
            medicines
        } = req.body;

        const patientName =
            patientFirstName +
            ` ` +
            (patientMiddleName !== undefined && patientMiddleName.length !== 0
                ? patientMiddleName + ` `
                : ``) +
            patientLastName;

        const patientPrescriptionExpiration = new Date(expiration);
        const patientDateOfBirth = new Date(dob);
        const newPrescription = await Prescription.create({
            patientName,
            patientEmail,
            patientPhoneNumber,
            patientDateOfBirth,
            patientPrescriptionExpiration,
            medicines
        });
        sendPrescriptionEmail(newPrescription.patientEmail, newPrescription.prescriptionNumber);
        successResponse(res, newPrescription, 200);
        // newPrescription.patientEmail, newPrescription.prescriptionNumber
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
            prescriptionNumber: req.body.prescriptionNumber
        });
        successResponse(res, prescriptions, 200, 'PRESCRIPTION DELETED');
    } catch (err) {
        next(createCustomError(err));
    }
};

module.exports = {
    createPrescription,
    getPrescription,
    getAllPrescriptions,
    deletePrescription
};

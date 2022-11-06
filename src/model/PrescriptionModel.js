const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const randomstring = require("randomstring");
const SALT_ROUNDS = 10;

const PrescriptionSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  patientDateOfBirth: {
    type: String,
    required: true,
    // mm/dd/yyyy format
    set(val) {
      usDate = val.toLocaleString("en-US");
      return usDate.substr(0, usDate.indexOf(","));
    },
  },
  prescriptionNumber: {
    type: String,
    required: true,
    unique: true,
    default() {
      return randomstring.generate({
        length: 12,
        charset: this.patientName + this.patientDateOfBirth,
      });
      // return bcrypt.hashSync(
      // "3", 3
      // randomstring.generate(8),
      // this.patientName + this.patientDateOfBirth, 12
      // bcrypt.genSaltSync(SALT_ROUNDS)
      // );
    },
  },
  medicines: {
    type: [String],
    required: true,
  },
});

const Prescription = mongoose.model(
  "Prescription",
  PrescriptionSchema,
  "Prescription"
);

module.exports = { Prescription };

// const mongoose = require("mongoose");

// const prescriptionSchema = new mongoose.Schema(
//   {
//     patient_name: {
//       type: String,
//       required: true,
//     },
//     date_of_birth: {
//       type: Date,
//       required: true,
//     },
//     medicines: {
//       type: [String],
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const Prescription = mongoose.model(
//   "Prescription",
//   prescriptionSchema,
//   "Prescription"
// );

// module.exports = { Prescription };

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const randomstring = require("randomstring");

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
    set() {
      return bcrypt.hashSync(
        randomstring(8),
        this.patientName + this.patientDateOfBirth
      );
    },
  },
});

const Prescription = mongoose.model(
  "Prescription",
  PrescriptionSchema,
  "Prescription"
);

module.exports = { Prescription };

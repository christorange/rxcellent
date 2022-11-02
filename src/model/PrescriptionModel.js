const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
  {
    patient_name: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    medicines: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Prescription = mongoose.model(
  "Prescription",
  prescriptionSchema,
  "Prescription"
);

module.exports = { Prescription };

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PrescriptionSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientEmail: { type: String, required: true },
    patientDateOfBirth: {
        type: String,
        required: true,
        // Converts the input value to string in the MM/dd/yyyy format
        set(val) {
            let usDate = val.toLocaleString('en-US');
            return usDate.substr(0, usDate.indexOf(','));
        }
    },
    patientPhoneNumber: {
        type: String,
        required: true
    },
    prescriptionNumber: {
        type: String,
        required: true,
        unique: true,
        default() {
            const fullEncrypt = bcrypt.hashSync(this.patientName + this.patientDateOfBirth, 12);

            return fullEncrypt.substring(fullEncrypt.length - 10, fullEncrypt.length);
        }
    },
    medicines: {
        type: [String],
        validate: (v) => Array.isArray(v) && v.length > 0
    }
});

const Prescription = mongoose.model('Prescription', PrescriptionSchema, 'Prescription');

module.exports = { Prescription };

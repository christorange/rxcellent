const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { EMAIL_VERIFY_REG } = require('../tools/enum');

const PrescriptionSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientEmail: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                const email_verify = new RegExp(EMAIL_VERIFY_REG);
                return email_verify.test(v);
            },
            message: (props) => `${props.value} is not a valid email!`
        }
    },
    patientDateOfBirth: {
        type: String,
        required: true,
        // Converts the input value to string in the MM/dd/yyyy format
        set(val) {
            let usDate = val.toLocaleString('en-US');
            return usDate.substr(0, usDate.indexOf(','));
        }
    },
    patientPrescriptionExpiration: {
        type: String,
        required: true,
        set(val) {
            let usDate = val.toLocaleString('en-US');
            return usDate.substr(0, usDate.indexOf(','));
        }
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

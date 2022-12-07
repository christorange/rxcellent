import { describe, test, expect } from 'vitest';
const { Prescription } = require('../../model/PrescriptionModel');

describe('Prescription Model test', () => {
    let patientComplete = {
        patientName: 'Ignacio Moral',
        patientDateOfBirth: new Date('12/21/2000'),
        patientPrescriptionExpiration: new Date('1/31/2023'),
        patientEmail: 'imoral@bu.edu',
        patientPhoneNumber: '+15558793795',
        medicines: [
            {
                key: '3',
                quantity: 1
            },
            {
                key: '5',
                quantity: 2
            }
        ]
    };

    test("should be invalid if 'patientName' is empty", () => {
        const rest = { ...patientComplete, patientName: '' };
        let prescription = new Prescription(rest);
        prescription.validate((err) => {
            expect(err.errors.patientName).to.exist;
        });
    });

    test("should be invalid if 'patientEmail' is empty", () => {
        const rest = { ...patientComplete, patientEmail: '' };
        let prescription = new Prescription(rest);
        prescription.validate((err) => {
            expect(err.errors.patientEmail).to.exist;
        });
    });

    test("should be invalid if 'patientDateOfBirth' is empty", () => {
        const rest = { ...patientComplete, patientDateOfBirth: '' };
        let prescription = new Prescription(rest);
        prescription.validate((err) => {
            expect(err.errors.patientDateOfBirth).to.exist;
        });
    });

    test("should be invalid if 'patientPhoneNumber' does not exist", () => {
        const { patientPhoneNumber, ...rest } = patientComplete;
        let prescription = new Prescription(rest);
        prescription.validate((err) => {
            expect(err.errors.patientPhoneNumber).to.exist;
        });
    });

    test('Should be invalid if no medicine is added', () => {
        const { medicines, ...rest } = patientComplete;
        let prescription = new Prescription(rest);
        prescription.validate((err) => {
            expect(err.errors.medicines).to.exist;
        });
    });

    test('should be valid if all required fields added correctly', () => {
        const prescription = new Prescription(patientComplete);
        prescription.validate((err) => {
            expect(err).not.exist;
        });
    });
});

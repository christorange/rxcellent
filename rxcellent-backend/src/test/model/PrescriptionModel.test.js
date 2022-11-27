import { describe, test, expect } from 'vitest';
const { Prescription } = require('../../model/PrescriptionModel');

describe('Prescription Model test', () => {
    let patientComplete = {
        patientName: 'Ignacio Moral',
        patientDateOfBirth: new Date('12/21/2000'),
        patientEmail: 'imoral@bu.edu',
        patientPhoneNumber: '+15558793795',
        medicines: ['Enoprazol']
    };

    test("should be invalid if 'patientName' is empty", () => {
        patientComplete.patientName = '';
        let prescription = new Prescription(patientComplete);
        prescription.validate((err) => {
            console.log(err);
            expect(err.errors.patientName).to.exist;
        });
    });

    test("should be invalid if 'patientEmail' is empty", () => {
        patientComplete.patientEmail = '';
        let prescription = new Prescription(patientComplete);
        prescription.validate((err) => {
            expect(err.errors.patientEmail).to.exist;
        });
    });

    test("should be invalid if 'patientDateOfBirth' is empty", () => {
        patientComplete.patientDateOfBirth = '';
        let prescription = new Prescription(patientComplete);
        prescription.validate((err) => {
            expect(err.errors.patientDateOfBirth).to.exist;
        });
    });

    test("should be invalid if 'patientPhoneNumber' is empty", () => {
        patientComplete.patientPhoneNumber = '';
        let prescription = new Prescription(patientComplete);
        prescription.validate((err) => {
            expect(err.errors.patientPhoneNumber).to.exist;
        });
    });

    test('Should be invalid if no medicine is added', () => {
        patientComplete.medicines = [];
        let prescription = new Prescription(patientComplete);
        prescription.validate((err) => {
            expect(err.errors.medicines).to.exist;
        });
    });

    test('should be valid if all required fields added correctly', () => {
        let prescription = new Prescription({
            patientName: 'Ignacio Moral',
            patientDateOfBirth: new Date('12/21/2000'),
            patientEmail: 'imoral@bu.edu',
            patientPhoneNumber: '+15558793795',
            medicines: ['Enoprazol']
        });
        prescription.validate((err) => {
            expect(err).not.exist;
        });
    });
});

import supertest from 'supertest';
import { describe, test, beforeAll, expect } from 'vitest';
import app from '../../../app';

const dotenv = require('dotenv');
const mongooseClient = require('mongoose');
const req = supertest(app);
const AUTH_HEADER = 'PASS';

dotenv.config();

describe('Prescription API Test', () => {
    beforeAll(async () => {
        try {
            await mongooseClient.connect(process.env.MONGO_URL);
        } catch (error) {
            console.log(error);
        }
    });

    test('Should return all prescriptions', async () => {
        await req.get('/prescriptions/all').set('Authorization', AUTH_HEADER).send({}).expect(200);
    });

    test('Should generate New Prescription', async () => {
        const body = {
            patientFirstName: 'Mike',
            patientMiddleName: '',
            patientLastName: 'Bold',
            patientDateOfBirth: '11/4/1997',
            patientPrescriptionExpiration: '2/20/2023',
            patientEmail: 'mikebold@gmail.com',
            patientPhoneNumber: '+1232279810',
            medicines: [
                {
                    key: '5',
                    quantity: 1
                }
            ]
        };

        const result = await req
            .post('/prescriptions/')
            .set('Authorization', AUTH_HEADER)
            .send(body);
        expect(result._body.status).toEqual(200);
    });

    test("We should be able to find a given patient with the Prescription Number and it's Date of Birth", async () => {
        const result = await req.post('/prescriptions/get').set('Authorization', AUTH_HEADER).send({
            prescriptionNumber: 'paM/NZmOAW',
            patientDateOfBirth: '4/5/2000'
        });
        console.log(result._body.data);
        expect(result._body.data.patientName).toBe('John Guy');
    });
});

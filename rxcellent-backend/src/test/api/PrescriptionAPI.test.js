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

    test('/prescriptions/ returns HTTP:200', async () => {
        await req.get('/prescriptions').set('Authorization', AUTH_HEADER).send({}).expect(200);
    });

    test('Should return all prescriptions', async () => {
        await req.get('/prescriptions/all').set('Authorization', AUTH_HEADER).send({}).expect(200);
    });

    test('Should generate New Prescription', async () => {
        const body = {
            patientName: 'John Guy',
            patientDateOfBirth: '04/05/2000',
            patientEmail: 'johnguy@gmail.com',
            patientPhoneNumber: '+12345679810',
            medicines: ['Esomeprazole', 'Albuterol']
        };

        const result = await req
            .post('/prescriptions/')
            .set('Authorization', AUTH_HEADER)
            .send(body);
        expect(result._body.status).toEqual(200);
    });

    test("We should be able to find a given patient with the Prescription Number and it's Date of Birth", async () => {
        const result = await req
            .get('/prescriptions/?prescriptionNumber=Ienb5aHkvW&patientDateOfBirth=4/12/1983')
            // .set('Authorization', AUTH_HEADER)
            .send({});
        expect(result._body.data.patientName).toBe('Fake Noel');
    });
});

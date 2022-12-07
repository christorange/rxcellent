import supertest from 'supertest';
import { describe, test, beforeAll, expect } from 'vitest';
import app from '../../../app';

const dotenv = require('dotenv');
const mongooseClient = require('mongoose');
const req = supertest(app);

dotenv.config();

describe('User API Test', () => {
    beforeAll(async () => {
        try {
            await mongooseClient.connect(process.env.MONGO_URL);
        } catch (error) {
            console.log(error);
        }
    });

    test("Should register user's information", async () => {
        const body = {
            username: 'tsing4',
            email: '1234@gmail.coms',
            password: '123456'
        };

        const result = await req.post('/users/register').send(body);
        expect(result._body.status).toEqual(200);
    });
});

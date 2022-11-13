import { describe, test, expect, beforeAll, afterEach, afterAll } from 'vitest';
const { User } = require('../../model/UserModel');
const db = require('../memoryDb');

describe('User Model test', () => {
    beforeAll(async () => {
        await db.setUp();
    });

    afterEach(async () => {
        await db.dropCollections();
    });

    afterAll(async () => {
        await db.dropDatabase();
    });

    test("should be invalid if 'username' is empty", () => {
        let user = new User({
            email: 'abc@def.com'
        });
        user.validate((err) => {
            expect(err.errors.username).to.exist;
        });
    });

    test("should be invalid if 'email' is empty", () => {
        let user = new User({
            username: 'bob'
        });
        user.validate((err) => {
            expect(err.errors.email).to.exist;
        });
    });

    test('should be valid if all required fields added correctly', () => {
        let user = new User({
            username: 'bob',
            email: 'abc@def.com',
            password: 'abcde'
        });
        try {
            user.save();
        } catch (err) {
            expect(err).not.exist;
        }
    });
});

/* eslint-disable prettier/prettier */
import supertest from 'supertest';
import { describe, test, beforeAll, expect } from 'vitest';
import app from '../../../app';

const dotenv = require('dotenv');
const mongooseClient = require('mongoose');
const req = supertest(app);

dotenv.config();

describe('Item API Test', () => {
    beforeAll(async () => {
        try {
            await mongooseClient.connect(process.env.MONGO_URL);
        } catch (error) {
            console.log(error);
        }
    });

    test('should return HTTP:200', async () => {
        const result = await req.get('/items').send({}).expect(200);
    });

    test('should return unprescribed items only', async () => {
        const result = await req.get('/items/prescription?type=non-prescribed').send({});
        const non_prescribed_items_count = result._body.data.filter(
            (x) => x.prescription === 'non-prescribed'
        ).length;
        const items_count = result._body.data.length;
        expect(non_prescribed_items_count).toBe(items_count);
    });

    test("should return 'parameter name is not correct' message", async () => {
        const result = await req.get('/items/prescription?tyyypoo=non-prescribed').send({});
        expect(result._body.message).toBe(`Query parameter 'type' is missing.`);
    });

    test("should return 'parameter value is not correct' message", async () => {
        const result = await req.get('/items/prescription?type=nonononono').send({});
        expect(result._body.message).includes(`Query parameter 'type' should be in`);
    });

    test('should return the item with given key', async () => {
        const result = await req.get('/items/item/2').send({});
        const item = result._body.data;
        expect(item.key).toBe('2');
    });

    test('should return the items with given category', async () => {
        const result = await req.get('/items/nonprescribed/category?name=Pain %26 Fever').send({});
        const category_items_count = result._body.data.filter(
            (x) => x.category === 'Pain & Fever'
        ).length;
        const items_count = result._body.data.length;
        expect(category_items_count).toBe(items_count);
    });

    test("should return 'parameter name is not correct' message", async () => {
        const result = await req.get('/items/category?naaammme=Pain %26 Fever').send({});
        expect(result._body.message).toBe(`Query parameter 'name' is missing.`);
    });

    test('should return the items with given brand name', async () => {
        const result = await req.get('/items/nonprescribed/brand?name=Cymbalta').send({});
        const brand_items_count = result._body.data.filter(
            (x) => x.brand_names === 'Cymbalta'
        ).length;
        const items_count = result._body.data.length;
        expect(brand_items_count).toBe(items_count);
    });

    test("should return 'parameter name is not correct' message", async () => {
        const result = await req.get('/items/brand?nayme=Cymbalta').send({});
        expect(result._body.message).toBe(`Query parameter 'name' is missing.`);
    });

    test('should return the items with given keyword (brand or name)', async () => {
        const result = await req.get('/items/prescribed/keyword?text=exa').send({});
        const keyword_items_count = result._body.data.filter(
            (x) =>
                x.names.toLowerCase().includes('exa') || x.brand_names.toLowerCase().includes('exa')
        ).length;
        const items_count = result._body.data.length;
        expect(keyword_items_count).toBe(items_count);
    });

    test('should return the items with given price range (between low and high)', async () => {
        const [low, high] = [24, 30];
        const result = await req.post('/items/nonprescribed/price').send({
            low: low,
            high: high
        });
        const price_range_items_count = result._body.data.filter(
            (x) => x.price >= low && x.price <= high
        ).length;
        const items_count = result._body.data.length;
        expect(price_range_items_count).toBe(items_count);
    });

    test("should return 'parameter low is missing' message", async () => {
        const [low, high] = [25, 30];
        const result = await req.post('/items/price').send({
            lowkey: low,
            high: high
        });
        expect(result._body.message).toBe("Parameter 'low' is missing in the payload.");
    });

    test("should return 'parameter should be a positive number' message", async () => {
        const [low, high] = [25, -17.52];
        const result = await req.post('/items/price').send({
            low: low,
            high: high
        });
        expect(result._body.message).toBe("Parameter 'high' should be a positive number.");
    });
});

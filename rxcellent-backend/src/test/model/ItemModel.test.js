import { describe, test, expect } from 'vitest';
const { Item } = require('../../model/ItemModel');

describe('Item Model test', () => {
    test("should be invalid if 'key' is empty", () => {
        let item = new Item();
        item.validate((err) => {
            expect(err.errors.key).to.exist;
        });
    });
    test("should be invalid if 'price' type is not a number", () => {
        let item = new Item({ price: 'abc' });
        item.validate((err) => {
            expect(err.errors.price.reason.code).toBe('ERR_ASSERTION');
        });
    });
    test('should be valid if all required fields added correctly', () => {
        let item = new Item({
            key: '123',
            name: 'drugName',
            brand: 'drugBrand',
            ingredient: 'drugIngredient',
            prescription: 'non-prescribed',
            price: '13.00'
        });
        item.validate((err) => {
            expect(err).not.exist;
        });
    });
});

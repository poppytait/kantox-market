import { module, test } from 'qunit';
import CoffeeDiscount from 'kantox-market/discounts/CoffeeDiscount'

module('Unit | Discounts | CoffeeDiscount', function () {

    test('should return true when cart contains 2+ coffees', function (assert) {

        const cart = [
            {
                product: {
                    price: 11.23,
                    id: 3
                },
                quantity: 2,
            },
        ]

        const eligible = CoffeeDiscount.isEligible(cart);

        assert.equal(eligible, true);
    });

    test('should return false when cart has only 1 coffee', function (assert) {

        const cart = [
            {
                product: {
                    price: 11.23,
                    id: 3
                },
                quantity: 1,
            },
        ]

        const eligible = CoffeeDiscount.isEligible(cart);

        assert.equal(eligible, false);
    });

    test('should return correct discount', function (assert) {

        const cart = [
            {
                product: {
                    price: 11.23,
                    id: 3
                },
                quantity: 5,
            },
        ]

        const discount = CoffeeDiscount.calculateDiscount(cart);

        assert.equal(discount, 18.72);
    });

    test('should return correct discount', function (assert) {

        const cart = [
            {
                product: {
                    price: 11.23,
                    id: 3
                },
                quantity: 8,
            },
        ]

        const discount = CoffeeDiscount.calculateDiscount(cart);

        assert.equal(discount, 29.95);
    });
});
import { module, test } from 'qunit';
import CoffeeDiscount from 'kantox-market/discounts/CoffeeDiscount'

module('Unit | Discounts | CoffeeDiscount', function () {

    test('should return true when cart contains 3+ coffees', function (assert) {

        const cart = [
            {
                product: {
                    price: 11.23,
                    id: "3"
                },
                quantity: 3,
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
                    id: "3"
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
                    id: "3"
                },
                quantity: 3,
            },
        ]

        const discount = CoffeeDiscount.calculateDiscount(cart);

        assert.equal(discount, 11.23);
    });

    test('should return correct discount', function (assert) {

        const cart = [
            {
                product: {
                    price: 11.23,
                    id: "3"
                },
                quantity: 6,
            },
        ]

        const discount = CoffeeDiscount.calculateDiscount(cart);

        assert.equal(discount, 22.46);
    });
});
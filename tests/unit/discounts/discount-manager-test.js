import { module, test } from 'qunit';
import DiscountManager from 'kantox-market/discounts/DiscountManager'

module('Unit | Discounts | DiscountManager', function () {

    test('should return 0 when no discounts apply', function (assert) {

        const cart = [
            {
                product: {
                    price: 3.11,
                    id: "1"
                },
                quantity: 1,
            },
            {
                product: {
                    price: 5.00,
                    id: "2"
                },
                quantity: 2,
            },
            {
                product: {
                    price: 11.34,
                    id: "3"
                },
                quantity: 2,
            }
        ]

        const discount = DiscountManager.apply(cart);

        assert.equal(discount, 0);
    });

    test('should return correct sum of discounts', function (assert) {

        const cart = [
            {
                product: {
                    price: 1,
                    id: "3"
                },
                quantity: 3,
            },
            {
                product: {
                    price: 5,
                    id: "2"
                },
                quantity: 3,
            }
        ]

        const discount = DiscountManager.apply(cart);

        assert.equal(discount, 2.5);
    });
});
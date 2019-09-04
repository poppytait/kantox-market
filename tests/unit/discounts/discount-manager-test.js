import { module, test } from 'qunit';
import DiscountManager from 'kantox-market/discounts/DiscountManager'

module('Unit | Discounts | DiscountManager', function () {

    test('should return true if item in cart', function (assert) {

        const cart = [
            {
                product: {
                    price: 3.11,
                    id: "1"
                },
                quantity: 2,
            },
        ]

        const discount = DiscountManager.apply(cart);

        assert.ok(discount, true);
    });

    test('should return correct discount', function (assert) {

        const cart = [
            {
                product: {
                    price: 5,
                    id: "2"
                },
                quantity: 5,
            },
        ]

        const discount = DiscountManager.apply(cart);

        assert.equal(discount, 5.61);
    });
});
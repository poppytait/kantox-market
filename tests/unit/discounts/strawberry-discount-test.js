import { module, test } from 'qunit';
import StrawberryDiscount from 'kantox-market/discounts/StrawberryDiscount'

module('Unit | Discounts | StrawberryDiscount', function () {

    test('should return true when cart contains 3+ strawberries', function (assert) {

        const cart = [
            {
                product: {
                    price: 5,
                    id: 2
                },
                quantity: 3,
            },
        ]

        const eligible = StrawberryDiscount.isEligible(cart);

        assert.equal(eligible, true);
    });

    test('should return false when cart has only 1 strawberry', function (assert) {

        const cart = [
            {
                product: {
                    price: 5,
                    id: 2
                },
                quantity: 1,
            },
        ]

        const eligible = StrawberryDiscount.isEligible(cart);

        assert.equal(eligible, false);
    });

    test('should return correct discount', function (assert) {

        const cart = [
            {
                product: {
                    price: 5,
                    id: 2
                },
                quantity: 4,
            },
        ]

        const discount = StrawberryDiscount.calculateDiscount(cart);

        assert.equal(discount, 2);
    });

    test('should return correct discount', function (assert) {

        const cart = [
            {
                product: {
                    price: 5,
                    id: 2
                },
                quantity: 6,
            },
        ]

        const discount = StrawberryDiscount.calculateDiscount(cart);

        assert.equal(discount, 3);
    });
});
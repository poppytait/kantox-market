import { module, test } from 'qunit';
import GreenTeaDiscount from 'kantox-market/discounts/GreenTeaDiscount'

module('Unit | Discounts | GreenTeaDiscount', function () {

    test('it should return true when cart contains 2+ green teas', function (assert) {

        const cart = [
            {
                product: {
                    price: 3.11,
                    id: "1"
                },
                quantity: 3,
            },
        ]

        const eligible = GreenTeaDiscount.isEligible(cart);

        assert.equal(eligible, true);
    });

    test('it should return false when cart has only 1 green tea', function (assert) {

        const cart = [
            {
                product: {
                    price: 3.11,
                    id: "1"
                },
                quantity: 1,
            },
        ]

        const eligible = GreenTeaDiscount.isEligible(cart);

        assert.equal(eligible, false);
    });

    test('it should return correct discount', function (assert) {

        const cart = [
            {
                product: {
                    price: 3.11,
                    id: "1"
                },
                quantity: 5,
            },
        ]

        const discount = GreenTeaDiscount.calculateDiscount(cart);

        assert.equal(discount, 6.22);
    });

    test('it should return correct discount', function (assert) {

        const cart = [
            {
                product: {
                    price: 3.11,
                    id: "1"
                },
                quantity: 8,
            },
        ]

        const discount = GreenTeaDiscount.calculateDiscount(cart);

        assert.equal(discount, 12.44);
    });
});
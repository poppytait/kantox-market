import { module, test } from 'qunit';
import StrawberryDiscount from 'kantox-market/discounts/StrawberryDiscount'

module('Unit | Discounts | StrawberryDiscount', function () {

    test('should return true when cart contains 3+ strawberries', function (assert) {

        const cart = [
            {
                product: {
                    price: 3.11,
                    id: 2
                },
                quantity: 3,
            },
        ]

        const eligible = StrawberryDiscount.isEligible(cart);

        assert.equal(eligible, true);
    });
});
import { module, test } from 'qunit';
import { sum } from 'kantox-market/utils'

module('Unit | Utils ', function () {

    test('should return correct sum of numbers', function (assert) {
        const numbers = [1,2,3,4,5,6,7,8,9,0];

        assert.equal(45, sum(numbers));
    });
});
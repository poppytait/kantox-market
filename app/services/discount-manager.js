import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({
    discounts: A([]),

    init(discounts) {
        this._super(...arguments);
        this.set('discounts', discounts);
    },

    apply(cart) {
        return this.discounts.reduce((totalDiscount, discount) => totalDiscount + discount.calculate, 0)
    }
});

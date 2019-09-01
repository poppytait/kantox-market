import { A } from '@ember/array';
import Service from '@ember/service';
import { set } from '@ember/object';

export default Service.extend({
    cartItems: null,

    init() {
        this._super(...arguments);
        this.set('cartItems', A([]));
    },

    update(product, quantity) {
        const index = this.cartItems.findIndex(cartItem => cartItem.product.id === product.id)


        if (index === -1) {
            this.cartItems.pushObject({
                product,
                quantity,
            });

        } else {
            const item = this.cartItems.get(index)
            set(item, 'quantity', parseInt(quantity) + parseInt(item.quantity))
        }
    },

    empty() {
        this.cartItems.clear();
    }
});
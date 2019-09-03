import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    quantity: 1,

    shoppingCart: service(),

    actions: {
        addToCart(product) {
            const quantity = this.get('quantity')
            if (quantity >= 1) {
                this.shoppingCart.update(product, quantity)
            }
        },
    }

});

import Component from '@ember/component'
import { inject as service } from '@ember/service'


export default Component.extend({

    shoppingCart: service(),

    actions: {
        incrementQuantity(cartItem) {
            this.shoppingCart.update(cartItem.product, 1)
        },
        decrementQuantity(cartItem) {
            this.shoppingCart.update(cartItem.product, -1)
        },
    }

});

import Component from '@ember/component'
import { inject as service } from '@ember/service'


export default Component.extend({

    shoppingCart: service(),

    actions: {
        removeFromCart(product) {
            this.shoppingCart.remove(product)
        }
    }

});

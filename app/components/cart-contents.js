import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    shoppingCart: service(),

    actions: {
        removeFromCart(product) {
            console.log(product)
            this.shoppingCart.remove(product)
        }
    }

});

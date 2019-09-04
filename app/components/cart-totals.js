import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
    shoppingCart: service(),

    actions: {
        checkout() {
            this.shoppingCart.checkout();
            alert('You have checked out. Thank you for visiting Kantox Market 🙋🏼‍')
        },
    }
});

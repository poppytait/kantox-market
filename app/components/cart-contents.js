import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
    subtotal: 0,
    shoppingCart: service(),
    totalCalculator: service(),

    didRender() {
        this._super(...arguments);
        const total = this.totalCalculator.calculate(this.shoppingCart.cartItems)
        this.set('subtotal', total)
    }
});

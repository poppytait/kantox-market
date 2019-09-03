import Component from '@ember/component';
import { inject as service } from '@ember/service';
import DiscountManager from 'kantox-market/discounts/DiscountManager'

export default Component.extend({
    originalTotal: 0,
    discountAmount: 0,
    subtotal: 0,
    
    shoppingCart: service(),
    totalCalculator: service(),

    didRender() {
        this._super(...arguments);
        const total = this.totalCalculator.calculate(this.shoppingCart.cartItems)
        const discountAmount = DiscountManager.apply(this.shoppingCart.cartItems)

        this.set('originalTotal', total)
        this.set('discountAmount', discountAmount)
        this.set('subtotal', total - discountAmount)
    }
});

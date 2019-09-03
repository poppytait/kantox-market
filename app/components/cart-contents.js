import Component from '@ember/component';
import { inject as service } from '@ember/service';
import DiscountManager from 'kantox-market/discounts/DiscountManager'

export default Component.extend({
    subtotal: 0,
    discountAmount: 0,
    grandTotal: 0,

    shoppingCart: service(),
    totalCalculator: service(),

    didRender() {
        this._super(...arguments);
        const subtotal = this.totalCalculator.calculate(this.shoppingCart.cartItems)
        const discountAmount = DiscountManager.apply(this.shoppingCart.cartItems)
        const grandTotal = subtotal - discountAmount

        this.set('subtotal', subtotal.toFixed(2))
        this.set('discountAmount', discountAmount.toFixed(2))
        this.set('grandTotal', grandTotal.toFixed(2))
    }
});

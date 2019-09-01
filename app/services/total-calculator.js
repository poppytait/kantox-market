import Service from '@ember/service';

function calculateSubtotal(cart) {
    return cart.map(item => item.product.price * item.quantity)
        .reduce((subtotal, itemPrice) => (subtotal + itemPrice), 0)
}

export default Service.extend({
    total: 0,
    appliedDiscount: 0,

    calculate(cart) {

        return calculateSubtotal(cart)
    }

});

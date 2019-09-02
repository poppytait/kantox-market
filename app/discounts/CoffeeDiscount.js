import Discount from './Discount'

class CoffeeDiscount extends Discount {
    isEligible(cart) {
        return cart.some(item => item.product.id === 3 && item.quantity >= 3)
    }

    calculateDiscount(cart) {
        const { quantity, product: { price } } = cart.find(item => item.product.id === 3)
       
        return (price * (33.33 / 100) * quantity).toFixed(2)
}
}

export default new CoffeeDiscount()
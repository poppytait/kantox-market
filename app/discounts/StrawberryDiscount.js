import Discount from './Discount'

class StrawberryDiscount extends Discount {
    isEligible(cart) {
        return cart.some(item => item.product.id === 2 && item.quantity >= 3)
    }

    calculateDiscount(cart) {
        const { quantity, product: { price } } = cart.find(item => item.product.id === 2)

        return (price - 4.5) * quantity
    }
}

export default new StrawberryDiscount()
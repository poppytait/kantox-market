import Discount from './discount'

class StrawberryDiscount extends Discount {
    isEligible(cart) {
        return cart.some(item => item.product.id === 2 && item.quantity >= 3)
    }

    calculateDiscount(cart) {
        const { quantity, product: { price } } = cart.find(item => item.product.id === 2)

        return quantity >= 3 ? price === 4.5 : price === 5
    }
}

export default new StrawberryDiscount()
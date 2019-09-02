import Discount from './Discount'

const STRAWBERRY_ID = "2"

class StrawberryDiscount extends Discount {
    isEligible(cart) {
        return cart.some(item => item.product.id === STRAWBERRY_ID && item.quantity >= 3)
    }

    calculateDiscount(cart) {
        const { quantity, product: { price } } = cart.find(item => item.product.id === STRAWBERRY_ID)

        return (price - 4.5) * quantity
    }
}

export default new StrawberryDiscount()
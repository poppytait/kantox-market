import Discount from './Discount'

const COFFEE_TEA_ID = "3"

class CoffeeDiscount extends Discount {
    isEligible(cart) {
        return cart.some(item => item.product.id === COFFEE_TEA_ID && item.quantity >= 3)
    }

    calculateDiscount(cart) {
        const { quantity, product: { price } } = cart.find(item => item.product.id === COFFEE_TEA_ID)

        return price * (1 / 3) * quantity
    }
}

export default new CoffeeDiscount()
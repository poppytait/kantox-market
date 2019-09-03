import Discount from './Discount'


const GREEN_TEA_ID = "1"

class GreenTeaDiscount extends Discount {
    isEligible(cart) {
        return cart.some(item => item.product.id === GREEN_TEA_ID && item.quantity >= 2)
    }

    calculateDiscount(cart) {
        const { quantity, product: { price } } = cart.find(item => item.product.id === GREEN_TEA_ID)

        return quantity % 2 === 0 ? (quantity * price) / 2 : (quantity - 1) * price / 2

    }
}

export default new GreenTeaDiscount()

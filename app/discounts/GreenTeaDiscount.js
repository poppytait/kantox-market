import Discount from './Discount'

class GreenTeaDiscount extends Discount {
    isEligible(cart) {
        return cart.some(item => item.product.id === 1 && item.quantity >= 2)
    }

    calculateDiscount(cart) {
        const { quantity, product: { price } } = cart.find(item => item.product.id === 1)

        if (quantity % 2 === 0) {
            return (quantity * price) / 2
        } else {
            return (quantity - 1) * price / 2
        }
    }
}

export default new GreenTeaDiscount();

// 3 teas = £1.00 saving 50p
// 2 teas = 50p saving 50p
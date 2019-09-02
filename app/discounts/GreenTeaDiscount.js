import Discount from './Discount'

class GreenTeaDiscount extends Discount {
    isEligible(cart) {
        return cart.some(item => item.product.id === 1 && item.quantity >= 2)
    }

    calculateDiscount(cart) {
        const { quantity, product: { price } } = cart.find(item => item.product.id === 1)
       
        return (quantity % 2 === 0 ? (quantity * price ) / 2 : (quantity - 1) * price / 2).toFixed(2)

    }
}

export default new GreenTeaDiscount()
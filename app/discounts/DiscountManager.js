import GreenTeaDiscount from './GreenTeaDiscount'
import StrawberryDiscount from './StrawberryDiscount'
import CoffeeDiscount from './CoffeeDiscount'

const discounts = [
    GreenTeaDiscount,
    StrawberryDiscount,
    CoffeeDiscount
]

const DiscountManager = class DiscountManager {
    constructor(discounts) {
        this.discounts = discounts;
    }

    apply(cart) {
        return this.discounts.reduce((totalDiscount, discount) => totalDiscount + discount.calculate(cart), 0)
    }
}

export default new DiscountManager(discounts);

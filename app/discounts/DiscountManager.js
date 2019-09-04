import GreenTeaDiscount from './GreenTeaDiscount'
import StrawberryDiscount from './StrawberryDiscount'
import CoffeeDiscount from './CoffeeDiscount'
import { sum } from '../utils'

const discounts = [
    GreenTeaDiscount,
    StrawberryDiscount,
    CoffeeDiscount
];
const DiscountManager = class DiscountManager {
    constructor(discounts) {
        this.discounts = discounts;
    }

    apply(cart) {
        const discountPerItem = this.discounts.map(discount => discount.calculate(cart))

        return sum(discountPerItem)
    }
}

export default new DiscountManager(discounts);

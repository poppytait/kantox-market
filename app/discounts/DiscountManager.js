export default class DiscountManager {
    constructor(discounts) {
        this.discounts = discounts;
    }

    apply(cart){
        return this.discounts.reduce((totalDiscount, discount) => totalDiscount + discount.calculate, 0)
    }
}


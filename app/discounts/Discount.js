export default class Discount {
    isEligible() {
        throw new Error('You have to implement the method isEligible!');
    }
    calculate(cart) {
        const eligible = this.isEligible(cart)
        return eligible ? this.calculateDiscount(cart) : 0
    }

    calculateDiscount() {
        throw new Error('You have to implement the method calculateDiscount!');
    }
}
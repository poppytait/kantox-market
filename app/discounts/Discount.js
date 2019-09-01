export default class Discount {
    isEligible() {
        throw new Error('You have to implement the method doSomething!');
    }
    calculate(cart) {
        const eligible = this.isEligible(cart)

        return eligible ? this.calculateDiscount() : 0
    }

    calculateDiscount() {
        throw new Error('You have to implement the method calculateDiscount!');
    }
}
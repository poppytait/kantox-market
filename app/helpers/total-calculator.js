import { sum } from "../utils";

export default function calculateTotal(cart){
    const pricePerCartItem = cart.map(item => item.product.price * item.quantity)

    return sum(pricePerCartItem)
}
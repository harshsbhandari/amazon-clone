import React from "react"
import "./Checkout.css"
import Subtotal from "./Subtotal"
import {useStateValue} from "../state/StateProvider"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className="checkout">
      {/* Checkout Left */}
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad"
        />
        <div className="checkout__title">
          <h2>Your shopping basket</h2>

          {/* Show everything in the basket */}
          {basket.map((item) => (
            // CheckoutProduct
            <CheckoutProduct
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Checkout Right */}
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout

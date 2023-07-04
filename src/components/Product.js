import React from "react"
import "./Product.css"
import StarIcon from "@mui/icons-material/Star"
import {useStateValue} from "../state/StateProvider"

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue()

  const addToBasket = () => {
    // dispatch the item into the data layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    })
  }

  return (
    <div className="product">
      {/* Title */}
      <p key={id} className="product__info">
        {title}
      </p>

      {/* Price */}
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>

      {/* Rating */}
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>
              <StarIcon className="star" />
            </p>
          ))}
      </div>

      {/* Product Image */}
      <img src={image} alt="Product Image" />

      {/* Add to Basket */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product

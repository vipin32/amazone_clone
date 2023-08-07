import React from 'react'
import './Product.css'
function Product({title, image, price, rating}) {
  return (
    <div className='product'>
      <p className='product__info'>{title}</p>
      <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <p className='product__rating'>
        {Array(rating)
         .fill()
         .map((_, i) => (
            <p>🌟</p>
         ))
        }
      </p>

      {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/Shop-all-Deals_PC-CC_1X_withoutstripe._SY304_CB599379717_.jpg"/> */}
      <img src={image}/>

      <button>Add to basket</button>
    </div>
  )
}

export default Product

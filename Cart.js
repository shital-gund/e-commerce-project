import axios from 'axios'
import React, { useEffect} from 'react'

const Cart = (props) => {

  const addToCart = () => {

    let payload = {
      name :props.products.name,
      price: props.products.price,
      img: props.products.img,
      qty:props.products.qty
    }
console.log("payload==>",payload)
    axios.post(` http://localhost:3001/cart`, payload)
      .then((response) => {
        console.log("RESPONSE", response);
      }).catch((error) => {
        console.log("ERROR", error)
      })
  }

  return (
    <>
      <div className="add-to-cart mb-3">
        <button onClick={() => addToCart()} className="btn btn-primary">Add to Cart</button>
      </div>
    </>
  )
}

export default Cart 
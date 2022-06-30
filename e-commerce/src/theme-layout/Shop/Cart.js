import axios from 'axios'
import React from 'react'
import Button from 'react-bootstrap/Button'

const Cart = (aalesh) => {

    const addToCart = () => {
        let payload = {
            id: aalesh.product.id,
            img: aalesh.product.img,
            title: aalesh.product.title,
            type: aalesh.product.type,
            price: aalesh.product.price,
            qty: aalesh.product.qty
        }

        axios.post("http://localhost:3001/Cart", payload)
            .then(response => {
                console.log("cartdata", response)
            })
            .catch(err => console.log(err))
    }
    return (

        <>
            <Button onClick={() => addToCart()} variant="primary btn btn-dark">Add to Basket</Button>
        </>

    )

}

export default Cart
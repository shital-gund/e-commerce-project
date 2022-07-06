import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card' 


export default function Basket(props) {
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/cart')
      .then(response => {
        console.log("Getting from Server Product data=>", response.data)

        setCartProduct(response.data)

      })

      .catch(err => console.log(err))

  }, [])
  const postDelete = (id,e) => {
  e.preventDefault();
    axios.delete(`http://localhost:3001/cart/${id}`)
        .then(res => console.log('Deleting data!!!', res.data))
        .catch(err => console.log(err))
  }

  const onAdd = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);
    if (exist) {
      setCartProduct(
        cartProduct.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x

        )
      );
    } else {
      setCartProduct([...cartProduct, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);    if (exist.qty === 1) {
      setCartProduct(cartProduct.filter((x) => x.id !== product.id));
    } else {
      setCartProduct(
        cartProduct.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const itemsPrice = cartProduct.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <>
      <h2><strong>Cart Items</strong></h2>
      {cartProduct.length === 0 && <div>Cart is empty</div>}
  
      {cartProduct.map((item) => (
        <div className='card '>
          <div className='row '>
            <div className='col-md-3'>
            <div key={item.id}>
           <img src={item.img} className="img-fluid" alt="..." />
           </div>
            </div>
            <div className='col-md-2'>
            <div><strong>Name</strong></div>
             <h2 className="card-title"><strong>{item.name}</strong></h2>
            </div>
            <div className='col-md-2'>
              <div><strong>price</strong></div>
            <h4 className="card-title">${item.price}</h4>
            </div>
            <div className='col-md-2'>
            <div><strong>Quntity</strong></div>
            <Button variant="primary" onClick={() => onRemove(item)} >   -   </Button>{' '}
                  {item.qty}
                <Button variant="primary" onClick={() => onAdd(item)} > +    </Button>{' '}
                </div>
                <div className='col-md-2'>
                <div><strong>Total price</strong></div>
               <div>${item.qty*item.price}</div>
               </div>
               <div className='col-md-1'>
               <div><strong>Remove</strong></div>
               <Button variant="primary" onClick={(e)=>postDelete(item.id,e)}> Remove </Button>{' '}
                </div>
          </div>
        </div>
      
))}
    </>
  );
}

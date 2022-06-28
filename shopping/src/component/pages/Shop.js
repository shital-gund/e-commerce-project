import React, { useEffect, useState } from 'react'
//import Card from 'react-bootstrap/Card'  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button } from 'react-bootstrap';
import Cart from './Cart'

import axios from 'axios'

const Shop = () => {

  const [productData, setProductData] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [AllProductData, setAllProductData] = useState([]);
    useEffect(()=>{
      getAllProductData();
       getAllCategoryData();
  },[])


  const  getAllProductData=() => {
    axios.get('  http://localhost:3003/products')
    .then(response => {
      console.log("Getting from Server=>", response.data)
      setAllProductData(response.data)
      setProductData(response.data)
  })

  .catch(err => console.log(err))

}
const getAllCategoryData=() => {
  axios.get('  http://localhost:3003/category')
  .then(response => {
    console.log("Getting from Server=>", response.data)
    setCategoryData(response.data)
})

.catch(err => console.log(err))

} 
const changeCategory=(event)=>{
 // console.log(event.target.value)
  if(event.target.value==="All"){
    setProductData(AllProductData)
    
  }
  else{
  let filterdProductData = [...AllProductData].filter((product) => product.category_id === +event.target.value)
  setProductData(filterdProductData);

}
}
return (
  <>
   <div className='container'>
          <div className="row">
          </div>
          <div className="btn-group">
              <ul className="dropdown">
              <select onChange={changeCategory} name="cars" id="cars">
          <option value="All">All</option>
          
          {

            categoryData.length && categoryData.map((category) => {
              return <option value={category.id}>{category.name.toUpperCase()}</option>
            })
          }
        </select>
                  </ul>
                  </div>
          <div className='row'>
              {
                  productData.length && productData.map((product) => {
                      return (
                          <div key={product.key} className="col-4 my-2">
                              <div className='card' style={{ width: "18rem" }}>
                                  <img src={product.img} className="card-img-top" alt="..." />
                                  <div className="card-body">
                                      <h5 className="card-title">{product.name}</h5>
                                      <p className="card-text">{product.brand}</p>
                                      <h4 className="card-title">{product.price}</h4>
                                      {/* <a  className="btn btn-primary">Add to Card</a> */}
                                  </div>
                                  <Cart product={product} />
                              </div>
                          </div>
                           
                      )
                  })
              }
          </div>
      </div>
  </>

)

}

  
export default Shop;


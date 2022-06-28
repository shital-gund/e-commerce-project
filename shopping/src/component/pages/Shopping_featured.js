import React, { useEffect, useState } from 'react'
//import Card from 'react-bootstrap/Card'  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Col, Button } from 'react-bootstrap';

import axios from 'axios'

const Shopping_featured = () => {

  const [categoryData, setcategoryData] = useState([]);
  // const [productData, setProductData] = useState([]);
  // const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios.get('  http://localhost:3003/category')
      .then(response => {
        console.log("Getting from Server=>", response.data)
        setcategoryData(response.data)
      })

      .catch(err => console.log(err))

  }, [])

  // const arr = data.map((userdata) => {
  return (
    <>
      {/* console.log(response.data)
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{data.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}

      <div className="row">
        {
          categoryData.length && categoryData.map((category) => {
            return (
              <div key={category.id} className="col-3 my-2">
                <div className="card" style={{ width: '12rem' }}>
                <Card.Img variant="top" src={category.image} />
                  <div className="card-body">
                    <h4 className="card-title  ">{category.name}</h4>
                    <p className="card-text"> {category.description}</p>
                    <h5 className="card-text"> {category.price}</h5>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>



    </>
  )
}
export default Shopping_featured;


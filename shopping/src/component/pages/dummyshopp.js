import '../../App.js'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
const Shop = () => {
    const [productData, setProductData] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [AllProductData, setAllProductData] = useState([]);

useEffect(()=>{
    getAllProductData();
     getAllCategoryData();
},[])

    const  getAllProductData=() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setAllProductData(response.data)
                setProductData(response.data)
            })

            .catch(err => console.log(err))

    }
    const getAllCategoryData=() => {
        axios.get('http://localhost:3001/category')
            .then(response => {
                console.log("Getting from Server=>", response.data)
                setCategoryData(response.data)
            })

            .catch(err => console.log(err))

    }
    const changeCategory=(event)=>{
        let filterdProductData = [...AllProductData].filter((product) => product.category_id === +event.target.value)
        setProductData(filterdProductData);
    
    }

    return (
        <>
         <div className='container'>
                <div className="row">
                </div>
                <div className="btn-group">
                    <ul className="dropdown">
                    <select onChange={changeCategory} name="cars" id="cars">
                <option>All</option>
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
                                            <a  className="btn btn-primary">Add to Card</a>
                                        </div>

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
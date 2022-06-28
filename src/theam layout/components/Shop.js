import '../../App.js'
import Cart from './Utility/Cart';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
const Shop = () => {
    const [itemCount,  setItemCount] = useState(0)
    const [productData, setProductData] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const [colorData, setColorData] = useState([])
    const [priceData,setPriceData]=useState([])
    const [AllProductData, setAllProductData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllProductData();
        getAllCategoryData();
        getAllColorData();
        getAllPriceData()
    }, [])
    const getAllProductData = () => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                console.log("Getting from Server Product data=>", response.data)

                setProductData(response.data)
                setAllProductData(response.data)
            })

            .catch(err => console.log(err))

    }
  
     const getAllCategoryData = () => {
        axios.get('http://localhost:3001/category')
            .then(response => {
                console.log("Getting from Server category data =>", response.data)
                setCategoryData(response.data)
            })

            .catch(err => console.log(err))

    }

    const getAllColorData = () => {
        axios.get('http://localhost:3001/color')
            .then(response => {
                console.log("Getting from server color data =>", response.data)
                setColorData(response.data)
            })
            .catch(error => console.log(error))
    }

    const getAllPriceData = () => {
        axios.get('http://localhost:3001/price')
            .then(response => {
                console.log("Getting from server price data =>", response.data)
                setPriceData(response.data)
            })
            .catch(error => console.log(error))
    }

    const changeCategory = (event) => {
        if(event.target.value==="All Brand"){
            setProductData(AllProductData)
            
          }
          else{
        let filterdProductData = [...AllProductData].filter((product) => product.category_id === +event.target.value)
        setProductData(filterdProductData);
          }
    }
    const changeColor = (event) => {
        if(event.target.value==="All Color"){
            setProductData(AllProductData)
            
          }
          else{
        let filterColor = [...AllProductData].filter((color) => color.color_id === +event.target.value)
        setProductData(filterColor);
    }
}

    const changePrice= (event) => {
        if(event.target.value==="All Price"){
            setProductData(AllProductData)
            
          }
          else{
        let filterPrice = [...AllProductData].filter((price) => price.price_id === +event.target.value)
        setProductData(filterPrice);
    }
    }

    const filterData = productData.filter((val) => { return (val.name.toLowerCase().includes(searchTerm.toLowerCase())) })

    return (
        <>
            <div className='container'>
                <div className="row">
                </div>
 
  {/* <li class="nav-item dropdown" >
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Brand</a>
    <ul class="dropdown-menu"  >
        <select onChange={changeCategory} name="cars" id="cars">
     <li ><a class="dropdown-item">All</a></li>
      {    
       categoryData.length && categoryData.map((category) =>{ 
      return <li><a class="dropdown-item" value={category.id}>{category.name.toUpperCase()}</a></li>
    })
    }

    </ul>
    </select>
  </li>
</ul> */}
                <div className="btn-group">
             
                    <ul className="dropdown">
                        <select onChange={changeCategory} name="cars" id="cars">
                            <option>All Brand</option>
                            {
                                categoryData.length && categoryData.map((category) => {
                                    return <option value={category.id}>{category.name.toUpperCase()}</option>
                                })
                            }
                        </select>
                    </ul>
                </div>
                <div className="btn-group">
                    <ul className="dropdown">
                        <select onChange={changeColor} name="cars" id="cars">
                            
                            <option>All Color</option>
                            {
                                colorData.length && colorData.map((category) => {
                                    return <option value={category.id}>{category.name.toUpperCase()}</option>
                                })
                            }
                        </select>
                    </ul>
                </div>
                <div className="btn-group">
                    <ul className="dropdown">
                        <select onChange={changePrice} name="cars" id="cars">
                            <option>All Price</option>
                            {
                                priceData.length && priceData.map((Price) => {
                                    return <option value={Price.id}>{Price.name.toUpperCase()}</option>
                                })
                            }
                        </select>
                    </ul>
                </div>


                <div className='text-center'>
                <input type="text" placeholder='Search Product...' className='' onChange={(event) => { setSearchTerm(event.target.value) }}></input>
            </div>
            <br></br>
                <div className='row'>
                    {
                        filterData.length && filterData.map((product) => {
                            return (
                                <div key={product.id} className="col-3 my-2">
                                    <div className='card' style={{ width: "18rem" }}>
                                        <img src={product.img} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                           <strong> <h2 className="card-title">{product.name}</h2></strong>
                                            <h5 className="card-text">{product.brand}</h5>
                                            <h4 className="card-title">{product.price}</h4>
                                            <Cart products={product} />
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
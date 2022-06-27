import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
function RecommndedProduct() {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                console.log('Getting response from server=>', response.data)

                setProductData(response.data)

            })

            .catch(err => console.log(err))

    }, [])
    return (
        <>
            <div class="display">
                <div class="display-header">
                    <h1>Recommended Products</h1>
                    <a href="/recommended">See All</a></div>

                <div className='row'>
                    {
                        productData.map((product) => {
                            return (
                                <>
                                    <div key={product.key} className="col-3 my-2">
                                        <div class="product-display-img">
                                            <img alt="" class="product-card-img is-img-loaded" src={product.img} />
                                        </div>
                                        < div class="product-display-details">
                                            <h2>{product.name}</h2>
                                            <p class="text-subtle text-italic">{product.brand}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default RecommndedProduct
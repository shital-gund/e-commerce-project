import React from 'react'
import img from '../../assets/images/featured.png'
import FeaturedProduct from './FeaturedProduct'
function Featured() {
  return (
    <>
    <div class="banner">
        <div class="banner-desc">
            <h1>Featured Products</h1>
            </div><div class="banner-img">
        <img src={img} alt=""/>
        </div>
        </div>
        <FeaturedProduct/>
    </>
  )
}

export default Featured
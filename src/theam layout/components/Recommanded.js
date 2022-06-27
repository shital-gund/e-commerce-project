import React from 'react'
import img from '../../assets/images/recommanded.png'
import RecommndedProduct from './RecommndedProduct'
function Recommanded() {
  return (
    <>
    <div class="banner">
        <div class="banner-desc">
            <h1>Recommended Products</h1>
            </div><div class="banner-img">
        <img src={img} alt=""/>
        </div>
        </div>
        <RecommndedProduct/>
    </>
  )
}

export default Recommanded
import React from 'react'
import img1 from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <>
    <div className="container">
        <div class="row">
<div className="col-4 mx-10 gap-5">
    <h6>Developed by <strong>JULIUS GUEVARRA</strong></h6>
    </div>
    <div className="col-4 mt-10">  
    <img src={img1}></img>@2022
    </div>
    <div className="col-4 mt-10">
    <h6>Fork this project  HERE</h6>
    </div>
</div>

    </div>
    </>
  )
}

export default Footer
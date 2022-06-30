import React from 'react'
import banner from "../../theme-asset/img/banner-girl.png"
import Card1 from './Card1/Card1'
import Card2 from './Card2/Card2'

const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 mt-5'>
                        <h1><strong>See</strong> everything with <strong>Clarity</strong></h1>
                        <small>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</small>
                        <div> <button className="btn btn-outline-success bg-dark text-white  mt-3" type="submit">Shop Now</button></div>
                    </div>
                    <div className='col-6 mt-5 my-1'>
                        <img src={banner} style={{ width: '600px' }} />
                    </div></div>
            </div>
            <Card1 />
            <Card2 />
        </>
    )
}

export default Home
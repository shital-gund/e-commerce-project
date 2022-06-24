import React from 'react'
import Card1Data from './Card1Data'

const Card1 = () => {
    return (
        <div className="">
            <div className="display-header">
                <h1>Featured Products</h1>
                {/* <a href="/home" className='text-dark text-end'>See All</a> */}
            </div>
            <div className='row '>
                {Card1Data.map((card1) => {
                    return (
                        <div className=" d-flex col-lg-6 col-md-6 col-sm-12 justify-content-center">
                            <div className="product-display-img border my-2"><img alt="" className="product-card-img is-img-loaded bg-secondary" src={card1.img} key={card1.id} />
                                <div className="product-display-details">
                                    <h2>{card1.title}</h2>
                                    <p className="text-subtle text-italic">{card1.type}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card1
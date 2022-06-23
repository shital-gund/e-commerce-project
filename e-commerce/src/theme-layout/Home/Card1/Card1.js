import React from 'react'
import Card1Data from './Card1Data'

const Card1 = () => {
    return (
        <div className="display">
            <div className="display-header">
                <h1>Featured Products</h1><a href="/featured">See All</a>
            </div>
            <div className='card d-flex'>

                {Card1Data.map((card1) => {
                    return (
                        <div className="card-body">
                            <div className="product-display-img"><img alt="" className="product-card-img is-img-loaded" src={card1.img} key={card1.id} />
                            </div>
                            <div className="product-display-details">
                                <h2>Burnikk</h2>
                                <p className="text-subtle text-italic">Sexbomb</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card1
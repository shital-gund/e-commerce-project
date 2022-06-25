import React from 'react'
import Card1Data from './Card2Data'
import Card from 'react-bootstrap/Card'

const Card2 = () => {
    return (
        <div className="">
            <div className="display-header">
                <h1>Recommended Products</h1>
                {/* <a href="/home" className='text-dark text-end'>See All</a> */}
            </div>
            <div className='row '>
                {Card1Data.map((data1) => {
                    return (
                        <div className=" d-flex col-lg-3 col-md-4 col-sm-12 justify-content-center mb-3">
                            <Card style={{ width: '18rem' }} key={data1.id}>
                                <Card.Img variant="top" src={data1.img} className="bg-secondary" />
                                <Card.Body>
                                    <Card.Title>{data1.title}</Card.Title>
                                    <Card.Text>
                                        {data1.type}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card2
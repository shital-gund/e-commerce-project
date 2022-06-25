import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ShopData from '../Shop/ShopData'


const Card3 = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const filterData = ShopData.filter((val)=>{return( val.title.toLowerCase().includes(searchTerm.toLowerCase()))})

    return (
        <>
            <input type="text" placeholder='Search' onChange={(event)=>{setSearchTerm(event.target.value)}}></input>
            <div className='row '>
                {filterData.map((data) => {
                    return (
                        <div className=" d-flex col-lg-3 col-md-4 col-sm-12 justify-content-center mb-3">
                            <Card style={{ width: '18rem' }} key={data.id}>
                                <Card.Img variant="top" src={data.img} className="bg-secondary" />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.type}
                                    </Card.Text>
                                    <Card.Text>
                                        ${data.price}
                                    </Card.Text>
                                    <Button variant="primary">Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Card3
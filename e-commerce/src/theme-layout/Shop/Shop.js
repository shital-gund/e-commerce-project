import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ShopData from './ShopData'

const Shop = () => {

    const [item, setItem] = useState(ShopData)

    const filterItem = (categItem) => {

        const updatedItems = ShopData.filter((curElem) => {
            return curElem.type === categItem
        });

        setItem(updatedItems)
    }

    return (
        <>

            <h1 className='mt-5 text-center main-heading'> Our Product</h1>
            <hr />
            <h2 className='text-center'>Product Type</h2>
            <div className='menu-tabs container'>
                <div className='menu-tab d-flex justify-content-around'>
                    <button className='btn btn-warning' onClick={() => filterItem("Black Kibal")}>Black Kibal</button>
                    <button className='btn btn-warning' onClick={() => filterItem("Salt")}>Salt</button>
                    <button className='btn btn-warning' onClick={() => filterItem("Sexbomb")}>Sexbomb</button>
                    <button className='btn btn-warning' onClick={() => filterItem("Yezyow")}>Yezyow</button>
                    <button className='btn btn-warning' onClick={() => setItem(ShopData)}>All</button>
                </div>
            </div>
            <br></br><br></br>
            <div className='row '>
                {item.map((data) => {
                    return (
                        <div className=" d-flex col-lg-3 col-md-4 col-sm-12 justify-content-center mb-3">
                            <Card style={{ width: '18rem' }} key={data.id}>
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        {data.type}
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

export default Shop
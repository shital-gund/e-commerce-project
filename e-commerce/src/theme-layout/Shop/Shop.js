import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ShopData from './ShopData'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

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

           <DropdownButton id="dropdown-basic-button" title="Product Type" className='text-center'>
                <Dropdown.Item href="#/action-1" onClick={() => filterItem("Black Kibal")}>Black Kibal</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => filterItem("Salt")}>Salt</Dropdown.Item>
                <Dropdown.Item href="#/action-3"onClick={() => filterItem("Sexbomb")}>Sexbomb</Dropdown.Item>
                <Dropdown.Item href="#/action-3"onClick={() => filterItem("Yezyow")}>Yezyow</Dropdown.Item>
                <Dropdown.Item href="#/action-3"onClick={() => setItem(ShopData)}>All</Dropdown.Item>
            </DropdownButton>

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
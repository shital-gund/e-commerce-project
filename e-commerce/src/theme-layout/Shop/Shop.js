import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ShopData from './ShopData'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Shop = () => {

    const [item, setItem] = useState(ShopData)
    const [searchTerm, setSearchTerm] = useState("")

    const filterData = item.filter((val) => { return (val.title.toLowerCase().includes(searchTerm.toLowerCase())) })

    const filterItem = (categItem) => {

        const updatedItems = ShopData.filter((curElem) => {
            return curElem.type === categItem
        });

        setItem(updatedItems)
    }

    const filterPrice = (categprice) => {

        const updatedItems = item.filter((curElem1) => {
            return curElem1.price < categprice
        });

        setItem(updatedItems)
    }

    const filterPrice1 = (categprice1) => {

        const updatedItems = item.filter((curElem2) => {
            return curElem2.price > categprice1
        });

        setItem(updatedItems)
    }

    return (
        <>
            <h1 className='mt-2 text-center main-heading'> Our Product</h1>
            <hr />

            <DropdownButton variant="dark" bg="dark" id="dropdown-basic-button" title="Product Type" className='text-center'>
                <Dropdown.Item href="#" onClick={() => filterItem("Black Kibal")}>Black Kibal</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => filterItem("Salt")}>Salt</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => filterItem("Sexbomb")}>Sexbomb</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => filterItem("Yezyow")}>Yezyow</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => setItem(ShopData)}>All</Dropdown.Item>
            </DropdownButton>
            <br></br>
            <DropdownButton variant="dark" bg="dark" id="dropdown-basic-button" title="Price filter" className='text-center'>
                <Dropdown.Item href="#" onClick={() => filterPrice("51")}>$ 1-50</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => filterPrice1("51")}>$ 51-100</Dropdown.Item>
            </DropdownButton>

            <br></br>
            <div className='text-center'>
                <input type="text" placeholder='Search Product...' className='' onChange={(event) => { setSearchTerm(event.target.value) }}></input>
            </div>
            <br></br>
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
                                    <Button variant="primary btn btn-dark">Add to Basket</Button>
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
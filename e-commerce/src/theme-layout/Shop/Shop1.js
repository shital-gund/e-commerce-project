import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Cart from './Cart'

const Shop1 = () => {

    const [categoryData, setCategoryData] = useState([]);
    // const [item, setItem] = useState([]);
    // const [price, setPrice] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getelement();
    }, [])

    const getelement = () => {
        axios.get('http://localhost:3001/ShopData')
            .then(response => {
                console.log('Getting response from server=>', response.data)

                setCategoryData(response.data)

            })
            .catch(err => console.log(err))

    }

    const filterData = categoryData.filter((val) => { return (val.title.toLowerCase().includes(searchTerm.toLowerCase())) })

    // const filterItem = (categItem) => {

    //     const updatedItems = categoryData.filter((curElem) => {
    //         return curElem.type === categItem
    //     });
    //     setItem(updatedItems)
    // }

    // const filterPrice = (categprice) => {

    //     const updatedPrice1 = item.filter((curElem1) => {
    //         return curElem1.price < categprice
    //     });

    //     setPrice(updatedPrice1)

    // }

    return (
        <>
            <h1 className='mt-2 text-center main-heading'> Our Product</h1>
            <hr />
            <div className='text-center'>
                <input type="text" placeholder='Search Product...' className='' onChange={(event) => { setSearchTerm(event.target.value) }}></input>
            </div>
            <br></br>
            {/* <DropdownButton variant="dark" bg="dark" id="dropdown-basic-button" title="Product Type" className='text-center'>
                <Dropdown.Item href="#" onClick={() => filterItem("Black Kibal")}>Black Kibal</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => filterItem("Salt")}>Salt</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => filterItem("Sexbomb")}>Sexbomb</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => filterItem("Yezyow")}>Yezyow</Dropdown.Item>
                <Dropdown.Item href="#" checked onClick={() => setItem(categoryData)}>All</Dropdown.Item>
            </DropdownButton>
            <br></br>
            <DropdownButton variant="dark" bg="dark" id="dropdown-basic-button" title="Price filter" className='text-center'>
                <Dropdown.Item href="#" onClick={() => filterPrice("51")}>Under $50</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => filterPrice1("101")}>$ 51-100</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => setPrice(item)}>Under $100</Dropdown.Item>
            </DropdownButton>
            <br></br> */}
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
                                    <Cart product={data} />
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Shop1
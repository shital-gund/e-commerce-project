import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Basket = () => {
    const [basket, setBasketdata] = useState([])

    useEffect(() => {
        getBasketData()
    }, [])

    const getBasketData = () => {
        axios.get("http://localhost:3001/Cart")
            .then(response => {
                console.log(response.data)
                setBasketdata(response.data)
            }).catch(err => console.log(err))
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:3001/Cart/${id}`)
            .then(response => {
                console.log(response)
                getBasketData()
            }).catch(err => console.log(err))
    };

    const patchData = (id, quentity) => {
        quentity > 0 ? quentity:deleteData(id)
        let value = { qty: quentity }
        axios.patch(`http://localhost:3001/Cart/${id}`, value)
            .then(response => {
                console.log(response)
            }).catch(err => console.log(err))
    };


    return (
        <>
            {basket.map((data) => {
                return (
                    <>
                        <div className='my-2 bg-light' key={data.id}>
                            <div className='row'>
                                <div className='text-center col-3'>
                                    <img variant="top" src={data.img} style={{ width: "15rem" }} className="bg-secondary" />
                                </div>
                                <h4 className='col-2 text-center'>{data.title}</h4>
                                <h4 className='col-2 text-center'>
                                    {data.type}
                                </h4>
                                <h4 className='col-1 text-center'>
                                    ${data.price * data.qty}
                                </h4>
                                <div className='col-1'>
                                    <button onClick={() => { patchData(data.id, data.qty + 1) }}>+</button>
                                    <h4 className=''>
                                        {data.qty}
                                    </h4>
                                    <button onClick={() => { patchData(data.id, data.qty - 1) }}>-</button>
                                </div>
                                <div className='col-2'>
                                    <button className="btn btn-outline-danger px-5 mt-2" onClick={() => deleteData(data.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Basket
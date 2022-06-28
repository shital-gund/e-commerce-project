
import { Link, NavLink } from 'react-router-dom'
import img1 from '../../assets/images/logo.png'
import axios from 'axios'
import React, { useEffect,useState} from 'react'
// import {FaBeer} from "react-icons/fa";

export const Navbar = () => {
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    axios.get(` http://localhost:3003/cart`)
      .then((response) => {
        setCartAmount(response.data.length);
      })
      .catch((error) => { console.log("response", error) })
  }, [])
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={img1}></img>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to ={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to ={'/Shop'}>Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to ={'/Featured'}>Featured</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to ={'/Recommended'}>Recommended</NavLink>
            </li>
</ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <div className="container">
      <div className="d-flex flex-row-reverse">
        <h2>Cart: {cartAmount}</h2>
      </div>
    </div>
              <button className="btn btn-outline-success" type="submit">Sign-up</button>
              <button className="btn btn-outline-success" type="submit">Sign-in</button>
            </form>
        
      </div>
    </nav>
  
  

  
  </>
  )
}


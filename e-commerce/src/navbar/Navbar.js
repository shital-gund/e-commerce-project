import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../theme-asset/img/logo.png";
import NavbarData from "./NavbarData";
import cart from "../theme-asset/img/bag.png";

const Navbar = () => {

  const [value, setValue] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/Cart")
      .then(response => {
        console.log(response)
        console.log(response.data.length)
        setValue(response.data.length)
        if (response.status===200){
          let len=response.data.length
          setValue(len)
        }       
      }).catch(err => console.log(err))
  },[])

  return (
    <>
      <div className="navbar-area bg-white p-relative">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="/home" className="navbar-brand">
              <img src={logo} alt="logo" />
            </a>
            <div className="navbar-toggler" aria-pressed="false">
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </div>
            <div className="collapse navbar-collapse" is-nav="">
              <ul className="navbar-nav">
                {NavbarData.map((nav) => {
                  return (
                    <li className="nav-item">
                      <NavLink className="nav-link" exact to={nav.path} key={nav.id}>
                        {nav.menu}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
              <NavLink exact to="/basket" className="ms-2 me-5"> <img src={cart} style={{ width: '2rem' }} />
                <span className="position-absolute badge rounded-pill bg-dark">
                  {value}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </NavLink>
              <div className="others-options d-flex justify-content-right ms-5">
                <NavLink exact to="/signup" className="button button-small btn btn-dark ms-5 me-2">Sign Up</NavLink> <span> </span>
                <NavLink exact to="/signin" className="button button-small btn btn-dark ms-2 me-2">Sign In</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
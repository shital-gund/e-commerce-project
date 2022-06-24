import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../theme-asset/img/logo.png"
import NavbarData, { Navlink } from "./NavbarData"
import Form from 'react-bootstrap/Form'
// import "../theme-asset/css/chunk-vendors.814e7775.css";
// import "../theme-asset/css/app.adda8296.css";

const Navbar = () => {
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
              <submit> <Form.Control type="email" placeholder="Search Product" /></submit>
              <NavLink exact to="/home" className="me-4"> <i className={"bx bx-cart"}></i> </NavLink>
              <div className="others-options">
                <button type='button' className="button button-small btn btn-dark" href="/signup">Sign Up</button> <span> </span><button type='button'
                  className="button button-small button-muted margin-left-s btn btn-light" href="/signin">Sign In</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
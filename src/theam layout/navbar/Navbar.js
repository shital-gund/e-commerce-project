
import axios from 'axios'
import React, { useEffect,useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.png"
import NavbarData, { Navlink } from "./NavbarData"
// import NavbarData from "./NavbarData";
import Form from 'react-bootstrap/Form'
import { BiCart} from "react-icons/bi";


const Navbar = () => {
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    axios.get(` http://localhost:3001/cart`)
      .then((response) => {
        setCartAmount(response.data.length);
      })
      .catch((error) => { console.log("response", error) })
  }, [])

   

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
          
              <div className="container">
           <div className="d-flex flex-row-reverse">
           <h4 style={{color:"red"}}> <BiCart/>{cartAmount}</h4>
      </div>
    </div>
              
              <li class="navigation-action"><a class="button button-small" href="/signup">Sign Up</a>
              <a class="button button-small button-muted margin-left-s" href="/signin">Sign In</a></li>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Navbar;
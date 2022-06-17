import React from 'react'
import {Link, NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Img8 from "../Images/FooterLogo.png";

const Navbar = () => {
  return (
    <>
        <div>
            <div class="navbar-area bg-white p-relative">
              <div class="strax-nav">
                <div class="container">
                  <nav class="navbar navbar-expand-lg navbar-light">
                    <a href="/home-seven" class="navbar-brand"
                      ><img
                        src="data:image/png;base64,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"
                        alt="logo"
                    /></a>
                    <div class="navbar-toggler" aria-pressed="false">
                      <span class="icon-bar top-bar"></span
                      ><span class="icon-bar middle-bar"></span
                      ><span class="icon-bar bottom-bar"></span>
                    </div>
                    <div class="collapse navbar-collapse" is-nav="">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            Home <i class="bx bx-chevron-down"></i
                          ></a>
                          <ul class="dropdown-menu">
                            <li class="nav-item">
                              <a href="/" class="nav-link" exact="">
                                Home One (IT Startup)
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="/home-two" class="nav-link">
                                Home Two (IT Startup)
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="/home-three" class="nav-link">
                                Home Three (IT Startup)
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="/home-four" class="nav-link">
                                Home Four (SaaS Startup)
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="/home-five" class="nav-link">
                                Home Five (Chatbot)
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="/home-six" class="nav-link">
                                Home Six (Chatbot)
                              </a>
                            </li>
                            <li class="nav-item">
                              <a href="/home-seven" class="nav-link">
                                Home Seven (Chatbot)
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                aria-current="page"
                                href="/home-eight"
                                class="router-link-active active nav-link"
                              >
                                Home Eight (Digital Marketing)
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a href="/about" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                          <a href="/pricing" class="nav-link">Pricing</a>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link">
                            Pages <i class="bx bx-chevron-down"></i
                          ></a>
                          <ul class="dropdown-menu">
                            <li class="nav-item">
                              <a href="#" class="nav-link">
                                Services <i class="bx bx-chevron-down"></i
                              ></a>
                              <ul class="dropdown-menu">
                                <li class="nav-item">
                                  <a href="/services-one" class="nav-link"
                                    >Services Style One</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="/services-two" class="nav-link"
                                    >Services Style Two</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="/services-three" class="nav-link"
                                    >Services Style Three</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="/single-service" class="nav-link"
                                    >Service Details</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li class="nav-item">
                              <a href="#" class="nav-link">
                                Features <i class="bx bx-chevron-down"></i
                              ></a>
                              <ul class="dropdown-menu">
                                <li class="nav-item">
                                  <a href="/features-one" class="nav-link"
                                    >Features Style One</a
                                  >
                                </li>
                                <li class="nav-item">
                                  <a href="/features-two" class="nav-link"
                                    >Features Style Two</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li class="nav-item">
                              <a href="/team" class="nav-link">Team</a>
                            </li>
                            <li class="nav-item">
                              <a href="/log-in" class="nav-link">Log In</a>
                            </li>
                            <li class="nav-item">
                              <a href="/sign-up" class="nav-link">Sign Up</a>
                            </li>
                            <li class="nav-item">
                              <a href="/faq" class="nav-link">FAQ</a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a href="#" class="nav-link"
                            >Blog <i class="bx bx-chevron-down"></i
                          ></a>
                          <ul class="dropdown-menu">
                            <li class="nav-item">
                              <a href="/blog-one" class="nav-link">Blog Grid</a>
                            </li>
                            <li class="nav-item">
                              <a href="/blog-two" class="nav-link"
                                >Blog Right Sidebar</a
                              >
                            </li>
                            <li class="nav-item">
                              <a href="/single-blog" class="nav-link"
                                >Blog Details</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a href="/contact" class="nav-link">Contact</a>
                        </li>
                      </ul>
                      <div class="others-options">
                        <a href="/contact" class="default-btn"
                          ><i class="bx bxs-hot"></i>Get Started<span></span></a
                        ><a href="/log-in" class="default-btn black-btn"
                          ><i class="bx bx-log-in"></i>Log In<span></span
                        ></a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="others-option-for-responsive">
                <div class="container">
                  <div class="dot-menu">
                    <div class="inner">
                      <div class="circle circle-one"></div>
                      <div class="circle circle-two"></div>
                      <div class="circle circle-three"></div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="option-inner">
                      <div class="others-options">
                        <a href="/contact" class="default-btn"
                          ><i class="bx bxs-hot"></i>Get Started<span></span></a
                        ><a href="/log-in" class="optional-btn black-btn"
                          ><i class="bx bx-log-in"></i>Log In<span></span
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
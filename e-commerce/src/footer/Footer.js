import React from 'react'
import logo from "../theme-asset/img/logo.png"

const Footer = () => {
    return (
        <>
            <footer className="footer bg-light">

                <div className="footer-col-2 text-center"><img alt="Footer logo" className="footer-logo"
                    src={logo} />
                    <h5>©&nbsp;2022</h5>
                </div>
                <div className="footer-col-1 text-end"><span>Developed by <strong><a href="#" className='text-dark'>Aalesh Patil</a></strong></span></div>
            </footer>
        </>
    )
}

export default Footer
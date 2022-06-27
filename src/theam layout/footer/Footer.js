import React from 'react'
import logo from '../../assets/images/logo.png'
function Footer() {
  return (
    <>
    <footer class="footer">
        <div class="footer-col-1">
            <strong><span>Developed by <a href="https://github.com/jgudo">JULIUS GUEVARRA</a></span></strong>
            </div><div class="footer-col-2">
                <img alt="Footer logo" class="footer-logo" src={logo}/>
                    <h5>©&nbsp;2022</h5>
                    </div>
                    <div class="footer-col-3">
                    <strong><span>Fork this project &nbsp;<a href="https://github.com/jgudo/ecommerce-react">HERE</a>

    </span></strong></div></footer>
    </>
  )
}

export default Footer
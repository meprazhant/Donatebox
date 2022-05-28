import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from "react-router-dom";


function Navbar() {
    var i = 1
    function menshow(){
      var wrapper  = document.getElementById('wrapper')
      wrapper.style.display = "flex"
    }
    function hidemenu(){
        var wrapper  = document.getElementById('wrapper')
        wrapper.style.display = "none"
    }
  return (
    <div className='nav'>
            <div className="menmen" onClick={menshow}>
            <GiHamburgerMenu size={30}/>
        </div>
        <div className="logo">
        <Link to="/">
            <img src="https://www.hcparishtx.com/wp-content/uploads/2016/09/donation.png" alt="" />
            <p>Donatebox</p>
        </Link>
        </div>
        <div className="wrapper" id='wrapper'>
        <div className="logox">
            <img src="https://www.hcparishtx.com/wp-content/uploads/2016/09/donation.png" alt="" />
        </div>
        <div className="menus">
        <Link onClick={hidemenu} to="/discover" >Discover</Link>

            <a onClick={hidemenu}>About Us</a>
            <a onClick={hidemenu}>Request</a>
        </div>
        <div className="logarea">
            <Link onClick={hidemenu} to="/auth/login">Login</Link>
            <Link onClick={hidemenu} to="/auth/register">Register</Link>
        </div>
        <div className="cross" onClick={hidemenu}>
        </div>
        </div>
    
    </div>
  )
}

export default Navbar
import React from 'react'
import Logo from '../assets/logo_white.png';
import '../css/sidebar.css';
import {MdHome,MdAssignment} from 'react-icons/md';
import {FcServices} from 'react-icons/fc';
import {FaProductHunt} from 'react-icons/fa';
import {GrTransaction} from 'react-icons/gr';
import {BiSupport} from 'react-icons/bi';
import {Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div>
      <div className="main_Content">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="menus">
            <ul>
                <li><Link to='/'><MdHome className='menuIcon'/><span><h5>Home</h5></span></Link></li>
                <li><Link to='/myservices'><MdAssignment className='menuIcon'/><span><h5>My Services</h5></span></Link></li>
                <li><Link to='/orders'><MdAssignment className='menuIcon'/><span><h5>Orders</h5></span></Link></li>
                <li><Link to='/products'><FaProductHunt className='menuIcon'/><span><h5>Products / Services</h5></span></Link></li>
                <li><GrTransaction className='menuIcon'/><span><h5>Transactions</h5></span></li>
                <li><BiSupport className='menuIcon'/><span><h5>Support</h5></span></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

import React, { useContext, useState } from 'react'
import '../css/navbar.css';
import { FaBars } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { MdNotifications, MdOutlineAccountBalanceWallet,MdContactSupport } from 'react-icons/md';
import {FiSettings} from 'react-icons/fi'
import { TbMessages } from 'react-icons/tb';
import {VscReferences} from 'react-icons/vsc';
import {BiLogOutCircle} from 'react-icons/bi'
import GlobalContext from '../Context/GlobalContext';
import { useLocation } from "react-router-dom";
function Navbar() {
    const location = useLocation();
    const contest = useContext(GlobalContext);
    const [activDrop, setActiveDrop] = useState(false);
    const [paymentDropdown, setpaymentDropdown] = useState(false);

    const activeDropdown = () => {
        setActiveDrop(!activDrop);
    }
    return (
        <div>
            {
                location.pathname !== "/login" && location.pathname !== "/register" ? <nav className="navbar navbar-expand-lg navbar-light background">
                <div className="container-fluid">
                    <p className='barDesigne' ><FaBars className='bars' /></p>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="nav navbar-nav ml-auto right_menu align-items-center">

                            <li className="nav-link" onClick={() => setpaymentDropdown(!paymentDropdown)}>
                                <p className="nav-link">
                                    <MdOutlineAccountBalanceWallet className='walletIcon' /> <span className='digits'>$10000</span> <span className='btn btn-primary addmoney'>add</span>
                                </p>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#"><TbMessages /></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#"><MdNotifications /></a>
                            </li>

                            <li class="nav-item" onClick={activeDropdown}>
                                <a class="nav-link" aria-current="page" href="#"><CgProfile /></a>
                            </li>

                            {
                                activDrop ? <div className="dropDown animate__animated animate__fadeInDown">
                                    <ul className='dropdownmain'>
                                        <li className='p-1'><span className='icon'><CgProfile /></span><span className='ditem'>My Profile</span></li>
                                        <li className='p-1'><span className='icon'><FiSettings /></span><span className='ditem'>Setting</span></li>
                                        <li className='p-1'><span className='icon'><MdContactSupport /></span><span className='ditem'>Support</span></li>
                                        <li className='p-1'><span className='icon'><VscReferences /></span><span className='ditem'>Reffer & Earn</span></li>
                                        <li className='p-1'><span className='icon'><BiLogOutCircle /></span><span className='ditem'>Logout</span></li>
                                    </ul>
                                </div> : ""
                            }

                            {
                                paymentDropdown ? <div className="adddropDown animate__animated animate__fadeInDown">
                                    <ul className='dropdownmainadd d-flex justify-content-center flex-column'>
                                        <h5 className='ml-2'>Total Amount <span>$172</span></h5>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, reprehenderit</p>
                                        <form class="row g-3 d-flex justify-content-center align-items-center">
                                            <div class="col-auto">
                                                <input type="text" class="form-control" id="payment" placeholder="Enter Amount"/>
                                            </div>
                                            <div class="col-auto w-100 d-flex justify-content-center align-items-center">
                                                <button type="submit" class="btn btn-primary mb-3">Add To Your Wallet</button>
                                            </div>
                                        </form>
                                    </ul>
                                </div> : ""
                            }
                        </ul>
                    </div>
                </div>
            </nav> : ""
            }
        </div>
    )
}

export default Navbar

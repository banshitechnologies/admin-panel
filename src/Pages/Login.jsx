import React, { useState } from 'react'
import  Logo  from "../assets/logo_white.png";
import '../css/login.css';
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    const {logindata} = useSelector((state) => state.auth);
    const location = useLocation();
    const [login, setLogin] = useState({
        userName:"",
        password:"",
    })

    const handleInput = (e)=>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setLogin({...login,[name]:value})
        console.log(login);
    }
  return (
    <div>
       <div className="container">
                <div className="row flex justify-content-center align-items-center ">
                    <div className="col-md-7 center">
                        <div className="row mt-4">
                            <div className="col-md-6 left_Side_main borderE">
                                <div className="logor pt-3 flex justify-center" >
                                    <img src={Logo} className="pt-3 pb-3" alt="" />
                                </div>

                                <div className="left_header">
                                    <h2>Wellcome !</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo perspiciatis aspernatur placeat quasi !</p>
                                </div>
                            </div>
                            <div className="col-md-6 animate__animated animate__backInRight">
                                <div className="order-2 order-lg-1">
                                    <p className="text-center h4 fw-bold mb-3 mx-1 mx-md-4 clr mt-4">Login</p>
                                    <form  style={{maxWidth:"500px",margin:'auto'}} className='justify-center'>
                                        <div className="input-container">
                                            <i className="fa fa-user icon"></i>
                                            <input className="input-field regInput" type="text"placeholder="Username"  name="userName" value={login.username} onChange={(e)=>handleInput(e)}/>
                                        </div>

                                        <div className="input-container">
                                            <i className="fa fa-key icon"></i>
                                            <input className="input-field regInput" type="password" placeholder="Password"  name="password" value={login.password} onChange={(e)=>handleInput(e)}/>
                                        </div>

                                        <div className="regbutton flex justify-center">
                                        <button type="submit" class="btnr mt-4">Login</button>
                                        </div>
                                        <p style={{textAlign:'center',paddingLeft:'45px',marginTop:'20px'}}>Dont have an account ?  <Link to="/register">Register</Link></p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login

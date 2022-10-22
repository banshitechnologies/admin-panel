import React from 'react';
import  Logo  from "../assets/logo_white.png";
import {Link} from 'react-router-dom';
import '../css/login.css'

function Register() {
  return (
    <div>
    <div className="container">
        <div className="row flex justify-content-center">
            <div className="col-md-7 center">
                <div className="row mt-4">
                    <div className="col-md-6 left_Side_main borderE">
                        <div className="logor pt-3 flex justify-center" >
                            <img src={Logo} className="pt-3 pb-3" alt="logo" />
                        </div>

                        <div className="left_header">
                            <h2>Wellcome !</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo perspiciatis aspernatur placeat quasi !</p>
                        </div>
                    </div>
                    <div className="col-md-6 animate__animated animate__backInRight">
                        <div className="order-2 order-lg-1">

                            <p className="text-center h4 fw-bold mb-3 mx-1 mx-md-4 clr">Create Account</p>

                            <form style={{maxWidth:"500px",margin:'auto'}} className='justify-center'>
                                <div className="input-container">
                                    <i className="fa fa-user icon"></i>
                                    <input className="input-field regInput" type="text"placeholder="Username" name="name" />
                                </div>

                                <div className="input-container">
                                    <i className="fa fa-envelope icon"></i>
                                    <input className="input-field regInput" type="text" placeholder="Email" name="email"/>
                                </div>

                                <div className="input-container">
                                    <i className="fa fa-phone icon"></i>
                                    <input className="input-field regInput" type="text" placeholder="Phone" name="phoneNumber"/>
                                </div>

                                <div className="input-container">
                                    <i className="fa fa-key icon"></i>
                                    <input className="input-field regInput" type="password" placeholder="Password" name="pass"/>
                                </div>

                                <div className="regbutton input-container">
                                <button type="submit" className="btnr mt-4">Register</button>
                                </div>
                                <p style={{textAlign:'center',paddingLeft:'45px',marginTop:'20px'}}>Already have an account ?  <Link to="/login">Login</Link></p>
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

export default Register

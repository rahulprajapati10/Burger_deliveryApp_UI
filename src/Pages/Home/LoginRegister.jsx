import React, { useState } from 'react'
import '../../Styles/LoginRegisterStyle.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Footer from '../../Components/Layouts/Footer';
import Header from '../../Components/Layouts/Header';



const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('')
    };


    return (
        <>
        <Header/>
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form action="" className="acton">
                    <h1>Login</h1>

                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forget">
                        <label><input type="checkbox" />Remember Me</label>
                        <a href="#">Forgot password ?</a>
                    </div>

                    <button type='submit'>Login</button>

                    <div className="register-link">
                        <p>Don't have an account?<a href="#" onClick={registerLink} >Register</a></p>
                    </div>

                </form>
            </div>

            <div className="form-box register">
                <form action="" className="acton">
                    <h1>Registration</h1>

                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        < FaEnvelope className='icon' />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>

                    <div className="remember-forget">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                        {/* <a href="#">Forgot password ?</a> */}
                    </div>

                    <button type='submit'>Register</button>

                    <div className="register-link">
                        <p>Already have an account?<a href="#" onClick={loginLink} >Login</a></p>
                    </div>

                </form>
            </div>
        </div>
        <Footer/>
         </> 
    );

}

export default LoginRegister;



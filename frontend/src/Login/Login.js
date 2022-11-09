import React, { useState } from 'react'
import headers from './headers'
import VerifyOTP from './VerifyOTP'
import logo from '../asset/logo.gif'

function Login() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [fullHash, setFullHash] = useState("")
    const [token, setToken] = useState("")
    const [show, setShow] = useState(false)


    const phoneNumberHandler = (e) => {
        const val = e.target.value;
        if (e.target.validity.valid) {
            setPhoneNumber(e.target.value);
        }
        else if (val === '' || val === '-') {
            setPhoneNumber(val)
        }
    }



    const submitHandler = async (e) => {
        e.preventDefault()
        setShow(true)
        const data = await fetch('http://localhost:7000/login', {
            method: 'POST',
            body: JSON.stringify({
                phoneNumber: `+91${phoneNumber}`
            }),
            headers: headers
        })
        const realData = await data.json()
        console.log(realData)
        setFullHash(realData.fullHash)
        setToken(realData.token)

    }


    return (
        <div className='login-page'>




            <div className='col col-1'>
                
                <img className='logo' src={logo} alt="logo"></img>
                <h1>Start Your Journey with Us</h1>
                <text>Explore The SMS Medical College's Best Community Of Doctors and Students.</text>
                
                
                </div>

           


            <div className='col col-2'>
                    
                    <h1>Hi, Welcome Back</h1>
                    <form className = "phone" onSubmit={submitHandler}>
                        <span class="unit">+91</span>
                        
                        <input  placeholder='Please type your Number here' type="tel" max={10} value={phoneNumber} pattern="^-?[0-9]\d*\.?\d*$" onChange={phoneNumberHandler} required></input>
                        <button className='button-blue' type='submit'>Get OTP</button>
                    </form>

                   

                    {
                        show ? <VerifyOTP fullHash={fullHash} token={token} phoneNumber={phoneNumber} /> 
                            : ""
                    }

                 




            </div>

        </div>
    )
}

export default Login
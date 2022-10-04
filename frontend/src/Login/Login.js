import React, { useState } from 'react'
import '../Login/login.css'
import headers from './headers'
import VerifyOTP from './VerifyOTP'

function Login() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [fullHash, setFullHash] = useState("")
    const [token, setToken] = useState("")
    const [isloading, setLoading] = useState(false)
    const [show, setShow] = useState(true)


    const phoneNumberHandler = (e)=>{
      const val = e.target.value;
      if (e.target.validity.valid){
        setPhoneNumber(e.target.value);}
        else if (val === '' || val === '-'){
            setPhoneNumber(val)
    } 
  }



    const submitHandler = async (e) => {
        e.preventDefault()
        // setShow(true)
        setLoading(true)
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
        setPhoneNumber(realData.user.phoneNumber)
        setLoading(false)
       
    }


    return (
        <div className='login'>

            <div className='left'>
                <h1>Hello sms medical college</h1>
            </div>

            <div className='right'>
                <div>
                    <h1>Explore The Medical Study</h1>
                </div>
                <div> <form className='align-item' onSubmit={submitHandler}>
                    <span>+91</span>
                    <input type="tel" max={10} value={phoneNumber} pattern="^-?[0-9]\d*\.?\d*$" onChange={phoneNumberHandler} required></input>
                    <button type='submit'>Get OTP</button>
                </form>
                </div>

            
                    {
                        show ? <div><VerifyOTP fullHash={fullHash} token={token} phoneNumber={phoneNumber} /> </div>
                        : ""
                    }

        


            </div>

        </div>
    )
}

export default Login
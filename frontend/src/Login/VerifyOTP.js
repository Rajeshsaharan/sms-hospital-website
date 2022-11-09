import React, { useState } from 'react'
import {connect, useSelector} from "react-redux"
import {FetchUser} from '../Redux/User/UserActions'



function VerifyOTP(props) {
    const [otp , setOTP] = useState("")
    const {phoneNumber, fullHash, token} = props
    const isloading = useSelector(state=>state.user.isloading)
    const {user , fetchUser} = props


    const submitHandler = (e)=>{
        e.preventDefault()
        const data = {phoneNumber, otp, fullHash, token}
        console.log(data)
        fetchUser(data)
    }


    const givedata = ()=>{
        if(!isloading){
            if(user){
                return <div> <h1>{user.phoneNumber}</h1>
                <img src={user.profilePicUrl}/>
                <h2>phoneNumber - {user.phoneNumber}</h2></div>
            }else{
                <h1></h1>
            }
        }else{
                return <h1>loading</h1>
        }
    }

    return (<>
        
        <>
        <form className='otp' onSubmit={submitHandler}>
        
        <input type = "text" placeholder={`please enter your otp sented to ${phoneNumber}`} max={4} value={otp} onChange={(e)=>setOTP(e.target.value)}></input>
   
        <button className='button-blue' type='submit'>Login</button>
        </form>
        </>
        
       
     

       
       
       
    </>

    )
}

const mapStateToProps = state => ({
    user: state.user.user
});

const mapDispacthToProps = dispatch => {
    return {
        fetchUser: (data) => {
            dispatch(FetchUser(data))
        }
    };
};



export default connect(
    mapStateToProps,
    mapDispacthToProps
)(VerifyOTP);
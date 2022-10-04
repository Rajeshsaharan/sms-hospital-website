import { FETCH_USER_FAIL } from "./UserTypes";
import { FETCH_USER_REQUEST } from "./UserTypes";
import { FETCH_USER_SUCCESS } from "./UserTypes";
import axios from 'axios'

export const  userFetch = ()=>{
    return {
        type : FETCH_USER_REQUEST,
        info : "fetching user",
    }
}

export const userFetchedSuccess = (payload)=>{
    return {
        type : FETCH_USER_SUCCESS,
        info : "fetching user",
        payload : payload
    }
}

export const  userFetchFail = (payload)=>{
    return {
        type : FETCH_USER_FAIL,
        info : "fetching user failed",
        payload: payload
    }
}

export const FetchUser = (data)=>{
    return (dispatch)=>{
        dispatch(userFetch())
        axios.post('http://localhost:7000/verify', data)
        .then((response)=>{
            const data = response.data
            dispatch(userFetchedSuccess(data))
        })
        .catch((e)=>{
            const error = e.message
            dispatch(userFetchFail(data))
        })
        
       
    
    }
    }


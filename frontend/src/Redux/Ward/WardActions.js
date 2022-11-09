import { FETCH_WARD_FAIL } from "./WardTypes";
import { FETCH_WARD_REQUEST } from "./WardTypes";
import { FETCH_WARD_SUCCESS } from "./WardTypes";
import axios from "axios"

export const  wardFetch = ()=>{
    return {
        type : FETCH_WARD_REQUEST,
        info : "fetching ward",
    }
}

export const wardFetchedSuccess = (wards)=>{
    return {
        type : FETCH_WARD_SUCCESS,
        info : "fetching ward success",
        payload : wards
    }
}

export const  wardFetchFail = (error)=>{
    return {
        type : FETCH_WARD_FAIL,
        info : "fetching ward failed",
        payload: error
    }
}


export const FetchWard = ()=>{
    return (dispatch)=>{
            dispatch(wardFetch())
            axios.get('http://localhost:7000/wards')
            .then((response)=>{
                const data = response.data
                dispatch(wardFetchedSuccess(data))
            })
            .catch((e)=>{
                const error = error.message
                dispatch(wardFetchFail(error))
            })
    }
}
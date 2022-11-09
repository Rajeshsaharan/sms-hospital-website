const wardState = {
    isloading : false,
    wards : [],
    error : ""
}


export const wardReducer = (state=wardState, action)=>{
    switch(action.type){
        case "FETCH_WARD_REQUEST":
            return {
                ...state,
                isloading :true
            }
        case "FETCH_WARD_SUCCESS":
            return {
                ...state,
                isloading : false,
                wards : action.payload
            }
        case "FETCH_ARTICLE_FAIL":
            return {
                ...state,
                isloading : false,
                error: action.payload
            }
       default:
            return state;
    }
}


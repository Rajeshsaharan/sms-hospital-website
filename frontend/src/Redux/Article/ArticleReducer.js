const articleState = {
    isloading : false,
    Articles : [],
    error : ""
}


export const articleReducer = (state=articleState, action)=>{
    switch(action.type){
        case "FETCH_ARTICLE_REQUEST":
            return {
                ...state,
                isloading :true
            }
        case "FETCH_ARTICLE_SUCCESS":
            return {
                ...state,
                isloading : false,
                Articles : action.payload
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


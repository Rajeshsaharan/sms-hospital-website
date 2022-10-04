const appState = {
    isloading : false,
    isAuth : true,
    user : {
        username : "rajeshJsaharan",
        profilePicUrl : "https://eu.ui-avatars.com/api/?name=John+Doe&size=250"
    },
    phoneNumber:"",
    token : ""
}

export const userReducer = (state=appState, action)=>{
    switch(action.type){
        case "FETCH_USER_REQUEST":
            return {
                ...state,
                isloading :true
            }
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                isloading : false,
                isAuth : action.payload.isAuth,
                user: action.payload.user,
                token : action.payload.token
            }
        case "FETCH_USER_FAIL":
            return {
                ...state,
                isloading : false,
                error: action.payload
            }
       default:
            return state;
    }
}
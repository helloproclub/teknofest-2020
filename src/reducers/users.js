import { POST_USER_CREATE, POST_USER_LOGIN } from '../actions/userAction'

let initialState = {    
    getResponDataUser: false,
    errorResponDataUser: false,
    getResponseLoginUser: false,
    errorResponseLoginUser: false,
    title: "Alfi Academy",
}

const users = (state = initialState, action) => {
    switch (action.type) {          
        case POST_USER_CREATE:
            console.log("hai")
            return {
                ...state,
                getResponDataUser: action.payload.data,
                errorResponDataUser: action.payload.errorMessage
            }    
        case POST_USER_LOGIN:
            return {                
                ...state,
                getResponseLoginUser: action.payload.data,
                errorResponseLoginUser: action.payload.errorMessage
            }    
        
        default:
            return state;
    }
}
export default users;

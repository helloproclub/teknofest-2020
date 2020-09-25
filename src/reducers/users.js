import { POST_USER_CREATE } from '../actions/userAction'

let initialState = {    
    getResponDataUser: false,
    errorResponDataUser: false,
    title: "Alfi Academy",
}

const users = (state = initialState, action) => {
    switch (action.type) {          
        case POST_USER_CREATE:
            return {
                ...state,
                getResponDataUser: action.payload.data,
                errorResponDataUser: action.payload.errorMessage
            }    
        
        default:
            return state;
    }
}
export default users;

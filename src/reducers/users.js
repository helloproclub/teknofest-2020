import { POST_USER_CREATE, POST_USER_LOGIN, CHANGE_USER_MISSION, NOTHING, GET_USER_DATA, GET_LOADING_SCREEN, PUT_USER_UPDATE } from '../actions/userAction'

let initialState = {
    getResponDataUser: false,
    errorResponDataUser: false,
    getResponseLoginUser: false,
    errorResponseLoginUser: false,
    getUserData: false,
    errorUserData: false,
    loading: false,

    missionReport: true,
    title: "Alfi Academy",
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOADING_SCREEN:
            // console.log("hai")
            return {
                ...state,
                loading: action.payload.data,                
            }
        case POST_USER_CREATE:
            // console.log("hai")
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
        case GET_USER_DATA:
            // console.log("hai")
            return {
                ...state,
                getUserData: action.payload.data,
                errorUserData: action.payload.errorMessage,
                loading: false,
            }
        case CHANGE_USER_MISSION:
            return {
                ...state,
                missionReport: action.data
            }
        case PUT_USER_UPDATE:
            return {
                ...state,
                getResponDataUser: action.payload.data,
                errorResponDataUser: action.payload.errorMessage
            }
        case NOTHING:
            return ''

        default:
            return state;
    }
}
export default users;

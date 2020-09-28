import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const POST_USER_CREATE = "POST_USER_CREATE";
export const POST_USER_LOGIN = "POST_USER_LOGIN";
export const CHANGE_USER_MISSION = "CHANGE_USER_MISSION";
export const NOTHING = "NOTHING";

export const postUserCreate = (data) => {
    return dispatch => {
        axios.post('http://my-json-server.typicode.com/alfi2811/react-fake-api/users',data)
            .then(function (response) {                
                dispatch({
                    type: POST_USER_CREATE,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: POST_USER_CREATE,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })            
    }
}

export const postUserLogin = (data) => {
    return dispatch => {
        axios.post('https://my-json-server.typicode.com/alfi2811/react-fake-api/users',data)
            .then(function (response) {
                // console.log(response)
                cookies.set('user', response.data)                
                cookies.set('token', '1981201821912')
                dispatch({
                    type: POST_USER_LOGIN,
                    payload: {
                        data: response.data,
                        errorMessage: false,
                    }
                })
                window.location = "/mission-report"
            })
            .catch(function (error) {
                dispatch({
                    type: POST_USER_LOGIN,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })            
    }
}


export const changeStateMission = () => {    
    if(cookies.get('token')){
        let data = cookies.get('user')
        return dispatch => {
            dispatch({
                type: CHANGE_USER_MISSION,
                data: data.status
            })
        }
    } else {
        return dispatch => {
            dispatch({
                type: NOTHING,
                data: ''
            })
        }
    }
}
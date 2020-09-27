import axios from 'axios';

export const POST_USER_CREATE = "POST_USER_CREATE";
export const POST_USER_LOGIN = "POST_USER_LOGIN";

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
        axios.post('http://my-json-server.typicode.com/alfi2811/react-fake-api/users',data)
            .then(function (response) {
                // console.log(response)
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

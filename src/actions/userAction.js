import axios from 'axios';
import Cookies from 'universal-cookie'
import BaseUrl from '../Constants/BaseUrl';

const cookies = new Cookies()

export const POST_USER_CREATE = "POST_USER_CREATE";
export const POST_USER_LOGIN = "POST_USER_LOGIN";
export const CHANGE_USER_MISSION = "CHANGE_USER_MISSION";
export const GET_USER_DATA = "GET_USER_DATA";
export const PUT_USER_UPDATE = "PUT_USER_UPDATE";
export const NOTHING = "NOTHING";

export const GET_LOADING_SCREEN = "GET_LOADING_SCREEN";
export const GET_SNACKBAR = "GET_SNACKBAR";

export const getLoadingScreen = () => {
    return dispatch => {
        dispatch({
            type: GET_LOADING_SCREEN,
            payload: {
                data: true,
            }
        })
    }
}

export const getSnackbars = (message, color) => {
    return dispatch => {
        dispatch({
            type: GET_SNACKBAR,
            desc: {
                message,
                color,
            }
        })
    }
}

export const getUserData = () => {
    let token = cookies.get('token')
    // let data = cookies.get('user')    
    // console.log("TOKENKU", token)    
    return dispatch => {
        dispatch(getLoadingScreen())
        BaseUrl.get('/user/me', { headers: { Authorization: token } })
            .then(function (response) {
                console.log(response)
                if (response.data.ok) {
                    let data = response.data.data
                    // cookies.set('user', data)
                    // cookies.set('token', data.token)
                    dispatch({
                        type: GET_USER_DATA,
                        payload: {
                            data: data,
                            errorMessage: false,
                        }
                    })
                    // history.push('/mission-report')
                    // window.location = '/mission-report'
                }
                // else {
                //     history.push('/login')
                // }
            })
            .catch(function (error) {
                dispatch({
                    type: GET_USER_DATA,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })
    }
}

export const postUserCreate = (data, history) => {
    return dispatch => {
        BaseUrl.post('/auth/register', data)
            .then(function (response) {
                if (response.data.ok) {
                    let data = response.data.data
                    cookies.set('user', data)
                    cookies.set('token', data.token)
                    dispatch({
                        type: POST_USER_LOGIN,
                        payload: {
                            data: data,
                            errorMessage: false,
                        }
                    })
                    // history.push('/mission-report')
                    window.location = '/mission-report'
                }
                else {
                    history.push('/login')
                }
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

export const postUserLogin = (data, history) => {
    return dispatch => {
        dispatch(getLoadingScreen())
        BaseUrl.post('/auth/login', data)
            .then(function (response) {
                if (response.data.ok == true) {
                    console.log("Haeee")
                    let data = response.data.data
                    cookies.set('user', data, { expires: new Date(Date.now() + 3600000) })
                    cookies.set('token', data.token, { expires: new Date(Date.now() + 3600000) })
                    dispatch({
                        type: POST_USER_LOGIN,
                        payload: {
                            data: data,
                            errorMessage: false,
                        }
                    })
                    history.push('/mission-report')
                }
                else {

                }
            })
            .catch(function (error) {
                console.log("jnck")
                dispatch({
                    type: POST_USER_LOGIN,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
                let msg = 'Login Gagal'
                let color = 'error'
                console.log(error.message)
                if (error.message == 'Request failed with status code 404') {
                    msg = "Can't find this email, register an account first"
                    color = 'warning'
                }
                dispatch(getSnackbars(msg, color))
                history.push('/login')
            })
    }
}


export const changeStateMission = () => {
    if (cookies.get('token')) {
        let data = cookies.get('user')
        console.log(data.id)
        return dispatch => {
            BaseUrl.get('/status/'+data.id)
                .then(function (response) {
                    if (response.data.ok) {
                        console.log(response)
                        let data = response.data.data                                                
                        dispatch({
                            type: CHANGE_USER_MISSION,
                            data: data
                        })
                        // history.push('/mission-report')
                        // window.location = '/mission-report'
                    }                    
                })
                .catch(function (error) {
                    dispatch({
                        type: CHANGE_USER_MISSION,                        
                        data: false,                                                    
                    })
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


export const putUserUpdate = (data, history) => {
    return dispatch => {
        dispatch(getLoadingScreen())
        let token = cookies.get('token')
        BaseUrl.put('/user/me', data, { headers: { Authorization: token } })
            .then(function (response) {
                if (response.data.ok) {
                    console.log(response)
                    let data = response.data.data                                                
                    dispatch({
                        type: PUT_USER_UPDATE,
                        payload: {
                            data: data,
                            errorMessage: false,
                        }
                    })
                    history.push('/mission-report')
                    // window.location = '/mission-report'
                } 
            })
            .catch(function (error) {
                dispatch({
                    type: PUT_USER_UPDATE,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
            })

        // try {
        //     const res = await BaseUrl.put('/user/me', { headers: { Authorization: token } }, data)
        //     console.log(res)           
        // } catch (error) {
        //     dispatch({
        //         type: PUT_USER_UPDATE,
        //         payload: {
        //             data: false,
        //             errorMessage: error.message,
        //         }
        //     })
        // }
    }
}
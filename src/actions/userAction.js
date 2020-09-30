import axios from 'axios';
import Cookies from 'universal-cookie'
import BaseUrl from '../Constants/BaseUrl';

const cookies = new Cookies()

export const POST_USER_CREATE = "POST_USER_CREATE";
export const POST_USER_LOGIN = "POST_USER_LOGIN";
export const CHANGE_USER_MISSION = "CHANGE_USER_MISSION";
export const GET_USER_DATA = "GET_USER_DATA";
export const GET_LOADING_SCREEN = "GET_LOADING_SCREEN";
export const PUT_USER_UPDATE = "PUT_USER_UPDATE";
export const NOTHING = "NOTHING";

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
        BaseUrl.post('/auth/login', data)                
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
                    history.push('/mission-report')
                }
                else {
                    history.push('/login')
                }
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
    if (cookies.get('token')) {
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


export const putUserUpdate = (data, history) => {
    return async (dispatch) => {
        let token = cookies.get('token')
        
        try {
            const res = await BaseUrl.put('/user/me', { headers: { Authorization: token } }, data)
            console.log(res)           
        } catch (error) {
            dispatch({
                type: PUT_USER_UPDATE,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })
        }
    }
}
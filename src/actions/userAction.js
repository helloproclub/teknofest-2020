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
export const USER_LOGOUT = "USER_LOGOUT";

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
    if(cookies.get('snackbar')){
        cookies.remove('snackbar')
    }
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
    return dispatch => {
        dispatch(getLoadingScreen())
        BaseUrl.get('/user/me', { headers: { Authorization: token } })
            .then(function (response) {                
                if (response.data.ok) {
                    let data = response.data.data                    
                    dispatch({
                        type: GET_USER_DATA,
                        payload: {
                            data: data,
                            errorMessage: false,
                        }
                    })                    
                }                
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
        dispatch(getLoadingScreen())
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
                    window.location = '/mission-report'
                }
                else {                    
                    history.push('/')
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
                let msg = 'An Account has been registered with this email before'
                let color = 'error'                
                dispatch(getSnackbars(msg, color))
                history.push('/')
            })
    }
}

export const postUserLogin = (data, history) => {
    return dispatch => {
        dispatch(getLoadingScreen())
        BaseUrl.post('/auth/login', data)
            .then(function (response) {
                if (response.data.ok === true) {                    
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
                dispatch({
                    type: POST_USER_LOGIN,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    }
                })
                let msg = 'Login Failed'
                let color = 'error'                  
                if (error.message === 'Request failed with status code 404') {
                    msg = "Can't find this email, Please register an account first"                    
                } else if (error.message === 'Request failed with status code 401'){
                    msg = "Something's wrong with your email or password"                    
                }
                dispatch(getSnackbars(msg, color))
                history.push('/')
            })
    }
}


export const changeStateMission = () => {
    if (cookies.get('token')) {
        let data = cookies.get('user')        
        return dispatch => {
            BaseUrl.get('/status/' + data.id)
                .then(function (response) {
                    if (response.data.ok) {                        
                        let data = response.data.data                        
                        dispatch({
                            type: CHANGE_USER_MISSION,
                            data: data
                        })                        
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
                    let data = response.data.data
                    dispatch({
                        type: PUT_USER_UPDATE,
                        payload: {
                            data: data,
                            errorMessage: false,
                        }
                    })
                    history.push('/mission-report')                    
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
                let msg = 'Update Failed'
                let color = 'error'                                  
                dispatch(getSnackbars(msg, color))
                history.push('/resubmit')                
            })
        
    }
}

export const userLogout = (history) => {
    return dispatch => {        
        cookies.remove('token')
        cookies.remove('user')
        dispatch({
            type: USER_LOGOUT,
        })        
        window.location = '/'

    }
}
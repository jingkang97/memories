import {AUTH} from '../constant/actionTypes'
import * as api from '../api';

export const signin = (loginFormData, history) => async (dispatch) => {
    try {
        // log in the user
        history.push('/feed')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (registerFormData, history) => async (dispatch) => {
    try {
        // log in the user
        history.push('/feed')
    } catch (error) {
        console.log(error)
    }
}
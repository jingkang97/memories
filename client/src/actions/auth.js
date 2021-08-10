import {AUTH} from '../constant/actionTypes'
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // log in the user
        // the { } is destructuring
        // vs const data = await api.signIn(formData).data 
        const { data } = await api.signIn(formData)

        dispatch({type: AUTH, data})

        history.push('/feed')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        // register the user
        console.log('yes')
        const { data } = await api.signUp(formData)
        console.log('yes2')
        dispatch({type: AUTH, data})

        history.push('/feed')
    } catch (error) {
        console.log(error)
    }
}
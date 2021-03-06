import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constant/actionTypes'
import * as api from '../api';


// action creators are function that returns an action
// with react thunk - dealing with async logic - have to add async

export const getPosts = () => async (dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        const action = {type: FETCH_ALL, payload: data}
        // instead of returning action we have to dispatch it
        dispatch(action);
    }catch(error){
        console.log(error.message)
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post)
        dispatch({type: CREATE, payload: data})
    }catch(error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);

        dispatch({type: UPDATE, payload: data})
        
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error)
        
    }
}
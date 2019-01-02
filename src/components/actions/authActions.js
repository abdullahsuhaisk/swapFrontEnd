import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signUp = ({email, password}) => async dispatch => {
    try{
        const response = await axios.post('http://localhost:8000/signup',{email, password});
        dispatch({type:AUTH_USER,payload:response.data.token});
        // When authenticate is active so we use browser's storege
        localStorage.setItem('token',response.data.token)
        //Dont forget the set up initial state in inex to localStoreg...
    }
    catch(e) {
        dispatch({ type:AUTH_ERROR,payload:'Email in use'});
    }
};

export const signOut = () => dispatch => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};
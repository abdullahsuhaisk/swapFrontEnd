import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, SIGN_UP_USER, SIGN_UP_USER_ERROR } from './types';

var headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
}


export const login = ({email, password}) => async dispatch => {
    try{
        const response = await axios.post('http://localhost:8000/signup',{email, password});
        dispatch({type:AUTH_USER,payload:response.data.token});
        // When authenticate is active so we use browser's storege
        localStorage.setItem('token',response.data.token);
        //Dont forget the set up initial state in inex to localStoreg...
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
      }
};

export const signOut = () => dispatch => {
    localStorage.removeItem('token');
    return ({
        type: AUTH_USER,
        payload: 'Çıkış yapıldı'
    });
};
export const signUp = (user) => async dispatch => {
    const uri = "http://localhost:8000/api/auth/signup"
    try{
        const response = await axios.post(uri ,user,{headers:headers});
        dispatch({type:SIGN_UP_USER,payload:response.data});
    }
    catch(e) {
        const response = await axios.post(uri ,{user});
        dispatch({type:SIGN_UP_USER_ERROR,payload:response.data});
    }
}
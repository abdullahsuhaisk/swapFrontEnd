import axios from 'axios';
import {FETCH_STATES} from './types';
const apiUrl = "http://127.0.0.1:8000/api/";
export const fetchState = () =>async dispatch => {
    const response = await axios.get('http://127.0.0.1:8000/api/state/');
    dispatch({
        type: FETCH_STATES,
        payload: response.data
    });
}


// export function saveComment (comment) {
//     return{
//         type: SAVE_COMMENTS,
//         payload: comment
//     }
// }
// export const fetchUser = () => async dispatch => {
//     const res = await axios.get('/api/current_user');
  
//     dispatch({ type: FETCH_USER, payload: res.data });
//     //payload: Cause we care about only users profile
//   };

//   export function fetchComments () {
//     const response = axios.get('https://jsonplaceholder.typicode.com/comments');
//     return {
//         type: FETCH_COMMENTS,
//         payload: response
//     }
// }
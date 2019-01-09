import axios from "axios";
import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  SIGN_UP_USER,
  SIGN_UP_USER_ERROR,
  SIGN_OUT
} from "./types";

var headers = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest"
};



export const login = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("http://localhost:8000/api/auth/login", formProps);
    //const token = response.data.token;
    console.log(response.data)
    dispatch({ type: LOGIN_USER, payload: response.data });
    // When authenticate is active so we use browser's storege
    localStorage.setItem("token", "Bearer " + response.data.access_token);
    //Dont forget the set up initial state in inex to localStoreg...
    callback();
  } catch (e) {
    dispatch({ type: LOGIN_USER_ERROR, payload: "Email in use" });
  }
};

export const signOut = () => dispatch => {
  localStorage.removeItem("token");
  // return ({
  //     type: SIGN_OUT,
  //     payload: 'Çıkış yapıldı'
  // });
  dispatch({ type: SIGN_OUT });
};
export const signUp = user => dispatch => {
  const uri = "http://localhost:8000/api/auth/signup";

  axios
    .post(uri, user, { headers: headers })
    .then((response) => {
      dispatch({ type: SIGN_UP_USER, payload: response.data });
      axios
        .post("http://localhost:8000/api/auth/login", {
          email: user.email,
          password: user.password,
          remember_me: true
        })
        .then(response => {
          dispatch({ type: LOGIN_USER, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: LOGIN_USER_ERROR, payload: err });
        });
    })
    .catch(err => {
      dispatch({ type: SIGN_UP_USER_ERROR, payload: err });
    });
};

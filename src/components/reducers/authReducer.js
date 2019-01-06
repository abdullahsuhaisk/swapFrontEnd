import { LOGIN_USER, LOGIN_USER_ERROR, SIGN_UP_USER, SIGN_UP_USER_ERROR, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  authenticated: "",
  message: null,
  access_token:'',
  token_type:'',
  expires_at:''
};

//AUTH_USER Login

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state,...action.payload,authenticated:true};
    case LOGIN_USER_ERROR:
      return {...state,...action.payload,authenticated:false};
    case SIGN_UP_USER:
      return {...state,...action.payload,authenticated:true};
    case SIGN_UP_USER_ERROR:
      return {...state,...action.payload,authenticated:false};
    case SIGN_OUT:
      return {...state,...action.payload,authenticated:false};
    default:
      return state;
  }
};

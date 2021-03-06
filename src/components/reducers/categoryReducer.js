import { FETCH_CATEGORIES, FETCH_CATEGORYS_ADS } from "../actions/types";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      //return (...state,...action.payload) Don't work Because you must return object in here only return single
      return { ...state, ...action.payload };
    //return (action.payload);
    case FETCH_CATEGORYS_ADS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default categoryReducer;

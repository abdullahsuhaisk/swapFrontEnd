import { FETCH_STATES_ADS, FETCH_CATEGORYS_ADS, ADD_AD_ERROR, ADD_AD_SUCCES } from "../actions/types";

const INITIAL_STATE = {
  data: {
    id: null,
    name: "",
    Ads: []
  }
};

const adsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STATES_ADS:
      return { ...action.payload };
    case FETCH_CATEGORYS_ADS:
      return { Ads:action.payload.data  };
    case ADD_AD_ERROR:
      return {error:action.payload}
    case ADD_AD_SUCCES:
      return ({...state,name:'ok'})
    default:
      return state;
  }
};

export default adsReducer;

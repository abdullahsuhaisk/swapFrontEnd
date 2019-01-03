import { FETCH_STATES_ADS, FETCH_CATEGORYS_ADS } from "../actions/types";

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
    default:
      return state;
  }
};

export default adsReducer;

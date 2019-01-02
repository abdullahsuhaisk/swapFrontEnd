import { FETCH_STATES_ADS } from "../actions/types";

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

    default:
      return state;
  }
};

export default adsReducer;

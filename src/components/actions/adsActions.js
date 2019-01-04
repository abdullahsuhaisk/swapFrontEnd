//singleAds, Categories Ads, City and State Ads
import axios from "axios";
import { FETCH_STATES_ADS,FETCH_CATEGORYS_ADS,ADD_AD_SUCCES, ADD_AD_ERROR } from "./types";

export const stateAds = stateId => async dispatch => {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/state/" + stateId
  );
  dispatch({
    type: FETCH_STATES_ADS,
    payload: response.data
  });
};
export const categoriyAds = categoryId => async dispatch => {
  const response = await axios.get(
    "http://127.0.0.1:8000/api/category/" + categoryId
  );
  dispatch({ type: FETCH_CATEGORYS_ADS, payload: response.data });
};

export const addAd = (Ad) => dispatch => {
  const response = axios.post('http://127.0.0.1:8000/api/ads',Ad).then(()=>{
    dispatch({type:ADD_AD_SUCCES})
  }).catch((err)=>{
    dispatch({type:ADD_AD_ERROR,payload:err})
  });
}
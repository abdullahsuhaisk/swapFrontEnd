//singleAds, Categories Ads, City and State Ads
import axios from 'axios';
import {FETCH_STATES_ADS} from './types'

export const stateAds = (stateId) => async dispatch => {
    const response = await axios.get('http://127.0.0.1:8000/api/state/'+stateId);
    dispatch({type:FETCH_STATES_ADS,payload:response.data})
}
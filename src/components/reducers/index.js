import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import locationReducer from './locationReducer';
import adsReducer from './adsReducer'
export default combineReducers({
    categories:categoryReducer,
    loca:locationReducer,
    advertise: adsReducer
});
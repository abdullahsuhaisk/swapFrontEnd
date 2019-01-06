import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import categoryReducer from './categoryReducer';
import locationReducer from './locationReducer';
import adsReducer from './adsReducer';
import authReducer from './authReducer';
export default combineReducers({
    categories:categoryReducer,
    loca:locationReducer,
    advertise: adsReducer,
    auth:authReducer,
    form: formReducer,
});
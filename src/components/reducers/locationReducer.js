import { FETCH_STATES } from '../actions/types';

const locationReducer = (state=[],action) => {
    switch (action.type) {
        case FETCH_STATES:
            return ({...state,...action.payload});
        default:
            return({...state});
    }
}

export default locationReducer;
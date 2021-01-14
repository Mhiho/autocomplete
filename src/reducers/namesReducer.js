import { FETCH_NAMES } from '../actions/namesAction';


export const namesReducer = ( state = {}, action ) => {
    switch (action.type) {
        case FETCH_NAMES: {
            return {
                ...state,
                names: action.names
            }
        }
        default:
            return state;
    }
}
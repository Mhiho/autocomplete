import { NamesAction, NamesActionTypes } from '../actions/namesAction';
import { Reducer } from 'redux';


export interface IName {
    id: number;
    name: string;
}
export interface INamesState {
    names: IName[];
}

const initialNamesState: INamesState = {
    names: []
  };

export const namesReducer: Reducer<INamesState, NamesAction> = ( state = initialNamesState, action ) => {
    switch (action.type) {
        case NamesActionTypes.FETCH_NAMES: {
            return {
                ...state,
                names: action.names
            }
        }
        default:
            return state;
    }
}
export type RootState = typeof namesReducer
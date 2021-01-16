import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IName, INamesState } from '../reducers/namesReducer';


export enum NamesActionTypes {
    FETCH_NAMES = 'FETCH_NAMES'
}

export interface INamesGetAllAction {
    type: NamesActionTypes.FETCH_NAMES;
    names: IName[];
}

export type NamesAction = INamesGetAllAction

export const getAllNames: ActionCreator<
ThunkAction<Promise<any>, INamesState, null, INamesGetAllAction>
> = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios('https://jsonplaceholder.typicode.com/users');
            dispatch({
                type: NamesActionTypes.FETCH_NAMES,
                names: response.data
            });
        } catch (err) {
            console.log(err);
        }
    }
}
export type getAllNamesAction = typeof getAllNames;

import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { namesReducer, INamesState } from '../reducers/namesReducer';

export interface IAppState {
   namesState : INamesState
}

const rootReducer = combineReducers<IAppState>({
    namesState: namesReducer
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}
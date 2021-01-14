import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { namesReducer } from '../reducers/namesReducer';

const rootReducer = combineReducers({
    namesState: namesReducer
});

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}
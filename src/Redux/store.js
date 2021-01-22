import {combineReducers, createStore} from 'redux';
import {photoReducer} from './photoReducer';

let reducers = combineReducers({photo: photoReducer});
let store = createStore(reducers);

window.store = store;

export default store;
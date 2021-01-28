import {combineReducers, createStore} from 'redux';
import {photoReducer} from './photoReducer';
import {languageReducer} from './languageReducer';

let reducers = combineReducers({
    photo: photoReducer,
    language: languageReducer
});
let store = createStore(reducers);

window.store = store;

export default store;
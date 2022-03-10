import { combineReducers, createStore } from 'redux';
import { glassReducer } from './glassReducer';

const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    glassReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
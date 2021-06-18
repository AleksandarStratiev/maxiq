import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const AllReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default AllReducers;
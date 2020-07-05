import { combineReducers } from 'redux';
import getUsers from './reducers/getUsers';

const rootReducer = combineReducers({
    getUsers
});

export default rootReducer;
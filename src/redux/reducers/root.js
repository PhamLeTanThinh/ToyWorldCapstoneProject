import { combineReducers } from 'redux'
import accountReducer from './account';
import groupReducer from './group';
import postReducer from './post';

const rootReducer = combineReducers({ 
    account: accountReducer,
    group: groupReducer,
    post: postReducer,
});

export default rootReducer;

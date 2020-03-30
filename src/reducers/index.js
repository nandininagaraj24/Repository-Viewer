import {combineReducers} from 'redux';
import {repoReducer} from './RepoTableReducer';
import {appReducer} from './AppReducer';

/* root reducer for the appplication*/
export default combineReducers({
    repoReducer,
    appReducer
})
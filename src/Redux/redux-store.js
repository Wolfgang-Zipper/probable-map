import {combineReducers, createStore, applyMiddleware} from 'redux';
import dialogs_main_redusor from './dialogs_main_redusor';
import body_redusor from './body_redusor';
import users_redusor from './users_redusor';
import login_redusor from './login_redusor';
import ThumkMiddleware from 'redux-thunk'
let redusers = combineReducers({
  body: body_redusor,
  Dialogs_main: dialogs_main_redusor,
  Users: users_redusor,
  Login: login_redusor
});

let store = createStore(redusers, applyMiddleware(ThumkMiddleware));

export default store;
window.store = store;

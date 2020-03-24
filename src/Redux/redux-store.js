import {combineReducers, createStore} from 'redux';
import dialogs_main_redusor from './dialogs_main_redusor';
import body_redusor from './body_redusor';

let redusers = combineReducers({
  body: body_redusor,
  Dialogs_main: dialogs_main_redusor
});

let store = createStore(redusers);

export default store;

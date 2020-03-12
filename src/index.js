import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State.js';
import {addnewPost, changePostText, changeMessText, addnewMess, subscribe} from './Redux/State.js';


export let rerenderTree = () => {

    ReactDOM.render(<App appData={state} changeMessText={changeMessText} changePostText={changePostText} addnewMess={addnewMess} addnewPost={addnewPost}/>, document.getElementById('root'));
};
rerenderTree();
subscribe(rerenderTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

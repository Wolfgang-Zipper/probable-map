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
import store from './Redux/State.js';



export let rerenderTree = () => {
    // метод .bind() связывает последовательность вызова(передачи) методов от прямого владельца "store", так как при передаче функций через props мы получаем ошибку, store undefined (функция находится в props, а не в store)
    ReactDOM.render(<App appData={store.getState()} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
    
};
// метод .bind() связывает последовательность вызова(передачи) методов от прямого владельца "store"
rerenderTree(store.getState());
store.subscribe(rerenderTree);

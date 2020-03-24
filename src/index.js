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
import store from './Redux/redux-store.js';
import {Provider} from "react-redux";



  // метод .bind() связывает последовательность вызова(передачи) методов от прямого владельца "store",
  //так как при передаче функций через props мы получаем ошибку, store undefined (функция находится в props, а не в store)
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
    document.getElementById('root'));

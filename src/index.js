import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import './assets/css/font.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import "react-multi-carousel/lib/styles.css";
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

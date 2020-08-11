import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import configureStore from './config/store';
import history from './config/history';
import App from './components/App';

const store = configureStore();

const root = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
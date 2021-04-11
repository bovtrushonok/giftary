/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { store } from './redux/store';

const reRenderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

reRenderTree();
store.subscribe(reRenderTree);

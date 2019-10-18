import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <h1>Root!</h1>
  </Provider>
)

export default Root;
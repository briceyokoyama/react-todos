import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {allTodos} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  
  const root = document.getElementById('content');
  console.log(root);
  ReactDOM.render(<Root store={store} />, root)
})

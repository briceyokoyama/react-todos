import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {allTodos, stepsByTodoId} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;
  window.stepsByTodoId = stepsByTodoId;
  
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root)
})

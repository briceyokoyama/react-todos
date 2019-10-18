import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const App = (props) => {
    return (
      <h1>Todos App</h1>
    )
  }

  const store = configureStore();

  window.store = store;
  
  const root = document.getElementById('content');
  console.log(root);
  ReactDOM.render(<App />, root)
})

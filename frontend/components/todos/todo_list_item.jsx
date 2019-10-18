import React from 'react';

export default props => {
  return (
    <>
      <li>
        { props.todo.title }
      </li>
      <button onClick={() => props.removeTodo(props.todo)}>Delete Todo</button>
    </>
  )
}
import React, { useState } from 'react';
import TodoDetailViewContainer from './todo_detail_view_container'

export default props => {

  const [detail, toggleDetail] = useState(false);

  const changeStatus = todo => {
    todo.done = !todo.done
    return todo;
  }

  return (
    <>
      <li onClick={() => toggleDetail(!detail)}>
        { props.todo.title }
      </li>
      <TodoDetailViewContainer body={props.todo.body} detail={detail} todoId={props.todo.id} />
      <button onClick={() => props.removeTodo(props.todo)}>Delete Todo</button>
      {
        props.todo.done ? 
        <button onClick={() => props.receiveTodo(changeStatus(props.todo))}>Not Done!</button> :
        <button onClick={() => props.receiveTodo(changeStatus(props.todo))}>Done!</button>
      }
    </>
  )
}
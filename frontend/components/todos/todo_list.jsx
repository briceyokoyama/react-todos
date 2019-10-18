import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_form';

export default (props) => {
  return (
    <>
      <ul>
          {props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} removeTodo={props.removeTodo} />)}
      </ul>
      <TodoListForm receiveTodo={props.receiveTodo}/>
    </>
  )
}
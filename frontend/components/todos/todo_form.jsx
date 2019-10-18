import React, { useState } from 'react';
import uniqueId from '../../util/uniqueId';

const TodoForm = props => {
  const [title, changeTitle] = useState('');
  const [body, changeBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: uniqueId(),
      title,
      body,
      done: false
    }
    props.receiveTodo(todo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" value={title} onChange={(e) => changeTitle(e.target.value)}/>
      </label>
      <label>Body:
        <input type="text" value={body} onChange={(e) => changeBody(e.target.value)}/>
      </label>
      <button>Create Todo</button>
    </form>
  )
}

export default TodoForm;
import React, { useState } from 'react';
import uniqueId from '../../util//uniqueId';

const StepForm = props => {
  const [title, changeTitle] = useState('');
  const [body, changeBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const step = {
      id: uniqueId(),
      title,
      body,
      done: false,
      todo_id: props.todoId
    }
    props.receiveStep(step);
    changeTitle('');
    changeBody('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Title:
        <input type="text" value={title} onChange={(e) => changeTitle(e.target.value)}/>
      </label>
      <label> Body:
        <input type="text" value={body} onChange={(e) => changeBody(e.target.value)}/>
      </label>
      <button>Add Step</button>
    </form>
  )
}

export default StepForm;
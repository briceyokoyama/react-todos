import React from 'react';
import StepListContainer from '../step_list/step_list_container';

const TodoDetailView = props => {

  const element = (
    <StepListContainer todoId={props.todoId} />
  )

  return (
    <div>
      { props.detail ? element : null }
    </div>
  )
}

export default TodoDetailView;
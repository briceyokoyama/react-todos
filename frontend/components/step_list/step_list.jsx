import React from 'react';
import StepListItem from './step_list_item';
import StepForm from './step_form';

const StepList = props => {
  return (
    <div>
      <ul>
        {props.steps.map(step => <StepListItem key={step.id} step={step} removeStep={props.removeStep} receiveStep={props.receiveStep} />)}
      </ul>
      <StepForm receiveStep={props.receiveStep} todoId={props.todoId} />
    </div>
  )
}

export default StepList;
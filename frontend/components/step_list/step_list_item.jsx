import React, { useState } from 'react';

const StepListItem = props => {

  const changeStatus = step => {
    step.done = !step.done;
    return step;
  }

  return (
    <div>
      <div>
        {props.step.title}
      </div>
      <div>
        {props.step.body}
      </div>
      {
        props.step.done ?
        <button onClick={() => props.receiveStep(changeStatus(props.step))}>Not Done!</button> :
        <button onClick={() => props.receiveStep(changeStatus(props.step))}>Done!</button>
      }
      <button onClick={() => props.removeStep(props.step)}>Remove Step</button>
    </div>
  )
}

export default StepListItem;
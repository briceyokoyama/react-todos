import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const initialState = {
  1: {
    id: 1,
    title: 'walk to store',
    done: false,
    todo_id: 1
  },
  2: {
    id: 2,
    title: 'buy soap',
    done: false,
    todo_id: 1
  }
}

const stepsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_STEPS:
      let steps = {};
      action.steps.forEach(step => {
        steps[step.id] = step;
      });
      return steps;

    case RECEIVE_STEP:
      let step = {};
      step[action.step.id] = action.step;
      return Object.assign({}, state, step);

    case REMOVE_STEP:
      let newState = Object.assign({}, state);
      delete newState[action.step.id];
      return newState;

    default:
      return state;
  }
}

export default stepsReducer;
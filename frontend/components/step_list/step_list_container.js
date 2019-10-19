import { connect } from 'react-redux';
import { receiveStep, removeStep } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';
import StepList from './step_list';

const mstp = (state, ownProps) => ({
  todoId: ownProps.todoId,
  steps: stepsByTodoId(state, ownProps.todoId)
});

const mdtp = dispatch => ({
  removeStep: step => dispatch(removeStep(step)),
  receiveStep: step => dispatch(receiveStep(step))
});

export default connect(mstp, mdtp)(StepList);
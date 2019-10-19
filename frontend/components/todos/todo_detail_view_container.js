import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';
import { receiveStep } from '../../actions/step_actions';

const mdtp = dispatch => ({
  removeTodo: todo => dispatch(removeTodo(todo)),
  receiveStep: todo => dispatch(receiveStep(todo))
})

export default connect(null, mdtp)(TodoDetailView);
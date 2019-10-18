import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions';

const mstp = state => ({
  todos: allTodos(state)
})

const mdtp = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
})

export default connect(mstp, mdtp)(TodoList);
import { bindActionCreators } from "redux";

const todosReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case "RECEIVE_TODOS":
      return action.todos;
    case "RECEIVE_TODO":
      return action.todo;
    default:
      return state;
  }
}

export default todosReducer;
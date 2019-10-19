import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODOS:
      let todos = {};
      action.todos.forEach(todo => {
        todos[todo.id] = todo;
      });
      return todos;

    case RECEIVE_TODO:
      let todo = {};
      todo[action.todo.id] = action.todo;
      return Object.assign({}, state, todo);

    case REMOVE_TODO:
      let newState = Object.assign({}, state);
      delete newState[action.todo.id];
      return newState;

    default:
      return state;
  }
}

export default todosReducer;
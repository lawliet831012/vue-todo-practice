export const state = () => ({
  todoList: [],
  loading: false,
});

export const mutations = {
  START_LOADING: function startLoadingToMimicApiLoading(state) {
    state.loading = true;
  },
  CREATE_TODO: function createTodoAndAddToList(state, todo) {
    state.todoList = [...state.todoList, { content: todo, done: false }];
    state.loading = false;
  },
  DELETE_TODO: function deleteTodoFromList(state, todo) {
    state.todoList.splice(state.todoList.indexOf(todo), 1);
  },
  TOGGLE_TODO: function toggleTargetTodo(state, todo) {
    todo.done = !todo.done;
  }
};
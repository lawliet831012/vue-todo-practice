export const state = () => ({
  todoList: [],
  loading: false,
  login: '',
});

const update = function updateLocalStorage(name, list) {
  const storageData = JSON.parse(localStorage.getItem('listData'));
  const newData = { ...storageData, [name]: list };
  localStorage.setItem('listData', JSON.stringify(newData));
}

export const mutations = {
  LOGIN: function login(state, name) {
    const storageData = JSON.parse(localStorage.getItem('listData'));
    if(storageData && storageData[name]) {
      state.todoList = storageData[name];
    }
    localStorage.setItem('loginName', name);
    state.login = name;
  },
  LOGOUT: function logout(state) {
    state.login = '';
    state.todoList = [];
    localStorage.setItem('loginName', '');
  },
  START_LOADING: function startLoadingToMimicApiLoading(state) {
    state.loading = true;
  },
  CREATE_TODO: function createTodoAndAddToList(state, todo) {
    state.todoList = [...state.todoList, { content: todo, done: false }];
    state.loading = false;
    update(state.login, state.todoList);
  },
  DELETE_TODO: function deleteTodoFromList(state, todo) {
    state.todoList.splice(state.todoList.indexOf(todo), 1);
    update(state.login, state.todoList);
  },
  TOGGLE_TODO: function toggleTargetTodo(state, todo) {
    todo.done = !todo.done;
    update(state.login, state.todoList);
  }
};
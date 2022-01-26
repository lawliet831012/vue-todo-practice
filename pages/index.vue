<template>
  <div class='layout'>
    <LoginForm />

    <div class="navBar">
      <svg :viewBox="menuIcon.viewBox">
        <use :xlink:href="'#' + menuIcon.id"></use>
      </svg>
      <h1>HandsUP</h1>
      <svg @click="logout" :viewBox="signOutIcon.viewBox">
        <use :xlink:href="'#' + signOutIcon.id"></use>
      </svg>
    </div>

    <div class="list">
      <h1>Todo List</h1>

      <List 
        v-for="(todo, index) in $store.state.todoList"
        :key="index" 
        :todo="todo" />

      <div>{{$store.state.loading ? 'Loading...' : ''}}</div>

      <div class="create-todo">
        <input 
          type="text" v-model="newTodo" 
          placeholder="請輸入要做的事情"
          :disabled="$store.state.loading"
          @keypress.enter="createTodo" />
        <button :disabled="$store.state.loading" @click="createTodo">
          <svg :viewBox="plusIcon.viewBox">
            <use :xlink:href="'#' + plusIcon.id"></use>
          </svg>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script>
  import menuIcon from "~/assets/svgs/menuIcon.svg?sprite";
  import signOutIcon from "~/assets/svgs/signOutIcon.svg?sprite";
  import plusIcon from "~/assets/svgs/plusIcon.svg?sprite";

  const initailLogin = localStorage.getItem('loginName');

  export default {
    data() {
      return {
        newTodo: '',
        menuIcon,
        signOutIcon,
        plusIcon
      };
    },
    methods: {
      async createTodo() {
        if (this.newTodo) {
          this.$store.commit('START_LOADING');
          await new Promise(resolve => setTimeout(resolve, 1000));
          this.$store.commit('CREATE_TODO', this.newTodo);
          this.newTodo = '';
        }
      },
      logout() {
        if(this.$store.state.login) {
          this.$store.commit('LOGOUT');
        }
      }
    },
  }
</script>

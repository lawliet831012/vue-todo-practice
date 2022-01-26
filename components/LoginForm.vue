<template>
  <div :class="`loginForm ${$store.state.login && 'logined'}`">
    <div class="loginInput">
      <input 
        type="text" v-model="loginName" 
        placeholder="請輸入登入名稱"
        @keypress.enter="login" />
      <button @click="login">login</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginName: '',
      }
    },
    methods: {
      login() {
        if(this.loginName) {
          this.$store.commit('LOGIN', this.loginName);
        }
      }
    },
    mounted() {
      const initailLogin = localStorage.getItem('loginName');

      if(initailLogin) {
        this.loginName = initailLogin;
        this.login();
      }
    }
  }
</script>

<style>

</style>
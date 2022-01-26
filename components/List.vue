<template>
  <div :class="`todo ${todo.done ? 'done' : ''}`">
    <button @click="toggleTodo">
      <svg :viewBox="(todo.done ? checkBoxCheckedIcon : checkBoxIcon).viewBox">
        <use :xlink:href="`#${todo.done ? checkBoxCheckedIcon.id : checkBoxIcon.id}`"></use>
      </svg>
    </button>
    <div class="content">{{ todo.content }}</div>
    <button @click="deleteTodo">
      <svg :viewBox="deleteIcon.viewBox">
        <use :xlink:href="`#${deleteIcon.id}`"></use>
      </svg>
    </button>
  </div>
</template>

<script>
  import checkBoxIcon from '~/assets/svgs/checkBox.svg?sprite';
  import checkBoxCheckedIcon from '~/assets/svgs/checkBoxChecked.svg?sprite';
  import deleteIcon from '~/assets/svgs/deleteIcon.svg?sprite';

  export default {
    data() {
      return {
        checkBoxIcon,
        checkBoxCheckedIcon,
        deleteIcon
      };
    },
    props: ['todo'],
    methods: {
      toggleTodo() {
        this.$store.commit('TOGGLE_TODO', this.todo);
      },
      deleteTodo() {
        this.$store.commit('DELETE_TODO', this.todo);
      }
    }
  }
</script>

<style>

</style>
<template lang="pug">
#app
    Nav()
    img(alt="Vue logo" src="./assets/logo.png")
    ToDoApp(msg="Welcome to Your Vue.js App")
    Parent()
</template>

<script>
import ToDoApp from './components/ToDoApp.vue'
import Nav from './components/Nav.vue'
import Parent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    ToDoApp,
    Nav,
    Parent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

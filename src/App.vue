<template lang="pug">
#app
    Nav()
    img(alt="Vue logo" src="./assets/logo.png")
    ToDoApp(msg="Welcome to Your Vue.js App")
    Parent()
    Message(
        :msg="msg"
    )
</template>

<script>
import ToDoApp from './components/ToDoApp.vue'
import Nav from './components/Nav.vue'
import Parent from './components/Parent.vue'
import Message from './components/Message.vue'

export default {
  name: 'App',
  components: {
    ToDoApp,
    Nav,
    Parent,
    Message
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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

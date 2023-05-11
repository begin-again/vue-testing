<template lang="pug">
.todo-app
    h1 My ToDo App
    form(@submit.prevent="addTodo" data-test="form")
        input(data-test="new-todo" v-model="newTodo" placeholder="Add a todo")
    div(v-for="todo in todos" :key="todo.id" data-test="todo" :class="[todo.completed ? 'completed' : '']") {{ todo.text }}
        input(type="checkbox" v-model="todo.completed" data-test="todo-checkbox")
</template>


<script lang="js">
export default {
    name: 'ToDoApp',
    data() {
        return {
            newTodo: '',
            todos: [
                { id: 1, text: 'Learn JavaScript'},
                { id: 2, text: 'Learn Vue' },
                { id: 3, text: 'Build something awesome' }
            ]
        }
    },
    methods: {
        addTodo() {
            const text = this.newTodo.trim()
            if (text) {
                this.todos.push({
                    id: this.todos.length + 1,
                    text
                })
                this.newTodo = ''
            }
        }
    }
}
</script>

<style lang="css">
.completed {
    text-decoration: line-through;
}
</style>

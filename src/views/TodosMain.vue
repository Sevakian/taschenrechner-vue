<template>
    <div>
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
        <AddTodo v-on:add-todo="addTodo"/>
    </div>
</template>

<script> 
import Todos from '../Components/todo/Todos.vue'
import AddTodo from '../Components/todo/AddTodo.vue'

export default {
    name: 'TodoMain',
    components: {
        Todos,
        AddTodo
    },
    data() {
        return {
            todos: [
                {
                  id: 1,
                  title: "Todo One",
                  completed: false
                },
                {
                  id: 2,
                  title: "Todo Two",
                  completed: true
                },
                {
                  id: 3,
                  title: "Todo Three",
                  completed: false
                },
            ]
        }
    },
    methods: {
        deleteTodo(id){
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        addTodo(newTodo){
            this.todos = [...this.todos, newTodo];
        }
    }
}
</script>

<style scoped>

</style>
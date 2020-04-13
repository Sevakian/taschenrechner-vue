<template>
    <div class="tcontainer">
        <AddTodos/>
        <filterTodos/>
        <todos/>
    </div>
</template>

<script>
import todos from '../Components/vuextodo/todos.vue';
import AddTodos from '../Components/vuextodo/AddTodos.vue'
import filterTodos from '../Components/vuextodo/filterTodos.vue'

export default {
    name: 'todosMain',
    components: {
        todos, AddTodos, filterTodos
    }
}
</script>

<style>
.tcontainer {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>


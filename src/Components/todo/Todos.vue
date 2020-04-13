<template>
    <div>
        <div v-for="todo in todos" :key="todo.id">
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
    
    name: "Todos",

    components: {
        TodoItem
    },

    props: ["todos"]
}
</script>

<style scoped>

</style>

//Damit die kleineren Componente die Eigenschaften der oberen Komponente 
benutzen können müssen sie als props registriert werden. Anschließend können sie
in den Templates benutzt werden
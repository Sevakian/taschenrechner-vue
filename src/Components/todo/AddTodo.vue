<template>
    <div>
        <form @submit="addTodo"> 
            <input type="text" v-model="title" name="title" placeholder="AddTodo">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data() {
        return {
            title: '',
            id: 4
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const NewTodo = {
                id: this.id,
                title: this.title,
                completed: false,
            }
            console.log(this.id);
            this.$emit('add-todo', NewTodo)
            this.title = '';
            this.id++;
        }
        
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex:10;
        padding: 5px;
    }

    input[type="submit"]{
        flex:2;
    }

    .btn {
        display: inline-block;
        border: none;
        background: #555;
        color: #fff;
        padding: 7px 20px;
        cursor: pointer;
    }

    .btn:hover {
        background: #666;
    }
</style>
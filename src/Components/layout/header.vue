<template>
    <header class="header">
        <h1> {{ $route.params.title }}</h1>
        <router-link to="/"> Home </router-link>
        <router-link to="/Rechner2"> RechnerProjekt</router-link>
    </header>
</template>

<script>
export default {
    name: "Header",
    watch: {
            '$route' (to){
                if(to.name == "About"){
                    alert(to.params.title);
                    console.log(to);
                }
                
            },
    },


    // created(){
    //     alert(this.$route.params.title);
    // }
}
</script>

<style scoped>
    .header {
        background: #333;
        color: #fff;
        text-align: left;
        padding: 10px;
    }

    .header a {
        color: #fff;
        padding-right: 5px;
    }

</style>
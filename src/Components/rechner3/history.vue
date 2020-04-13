<template>
    <div>
        <label> History </label>
        <div v-if="renderComponent"> 
        <p v-for="h in getHistory" :key="h.index"> {{ h }} </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'; 
export default {
    name: 'history',
    props: ['reset'],

    data(){
        return {
            renderComponent: true,
        }   
    },

    // Setzt die render Funktion beim reset zurück
    watch: {
            reset: function(){
                this.renderComponent = true;   
            }      
    },
    
    // Holt sich den History Array vom Store
    computed: {
        ...mapGetters(['getHistory'])
    }

}
</script>

<style scoped>

</style>
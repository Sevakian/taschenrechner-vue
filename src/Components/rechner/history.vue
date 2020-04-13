<template>
    <div>
        <label> History </label>
        <div v-if="renderComponent"> 
        <p v-for="h in history" :key="h.index"> {{ h }} </p>
        </div>
    </div>
</template>

<script> 
export default {
    name: 'history',
    props: [ 
        'operations',
        'results',

        'conNum',
        'conPro',
        'reset',
    ],

    data(){
        return {
            history: [],
            renderComponent: true,
        }
        
    },

    watch: {
        CalculationOutput(){
            this.renderComponent = true;
            this.history.push(this.operations + ' = ' + this.results);
        },

        ConvertOutput(){
            if(this.conPro == "" && this.conNum == ""){
                this.history.push(" => " + this.results);
            }
            else {
                this.history.push(this.results + " => " + this.conPro + " => " + this.conNum);
            }
            this.renderComponent = true;
        },
        
        reset: function(){
            this.renderComponent = false;   
            this.history = [];             

           
        }
    },
    methods: {

    },
    
    computed: {
        CalculationOutput(){
            return this.operations + this.results;
        },
        ConvertOutput(){
            return this.conNum + this.conPro;
        },


        
    }

}
</script>

<style scoped>

</style>
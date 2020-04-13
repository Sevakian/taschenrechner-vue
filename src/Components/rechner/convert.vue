<template>
    <div>
        <fieldset style="width:300px;padding:10px;"> 
        <v-label> Current Potency: {{ selected }} </v-label>
        <h3> {{ result }} </h3>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: 'converter',
    props: ['number', 'potency'],
    data(){
        return {
            selected: 'Decimal-10',
            result: this.number,
        }
    },

    watch: {
        number: "output",
        potency: "calculation"        
    },

    methods: {
        output(){
            this.result = this.number;
        },
        calculation(){
            var number = parseInt(this.number);
            var potency; 
            var temp = 0.5; 

            switch(this.potency){
                case 10:
                this.selected = "Decimal-10";
                potency = this.potency;
                break;

                case 2:
                this.selected = "Binary-2";
                potency = this.potency;
                temp = 0.5;
                break;

                case 16:
                this.selected = "Hexa-16"
                potency = this.potency;
                temp = 0.0625
                break;

                default:
                this.selected = "custom" + this.potency;
                potency = this.potency;
                temp = 0.5;

            }
            
            // Calculation Operation 

            var result = 0;
            var result1 = 0;
            var result2 = 0;
            var i = 0;
            var resultData = [];

            while(number > temp){

                    result = number/potency; // Teilt die Zahl durch die Potenz 
                    result1 = result - Math.floor(result); // Ermittelt die Nachkomma stelle
                    result2 = result1 * potency; // Multipliziert die nachkomma stelle mit der Potenz
                    result2 = Math.round(result2);// Rundet das Ergebnis 

               
                    if(result2 < 1 && 0){ 
                    resultData[i] = result2;
                    }
                    
                    else if(result2 < 10){
                    resultData[i] = result2;
                    }

                    else if (result2 < 11){
                    resultData[i] = "A";
                    }
                    
                    else if (result2 < 12){
                    resultData[i] = "B";
                    }
            
                    else if (result2 < 13){
                    resultData[i] = "C";
                    }
                
                    else if (result2 < 14){
                    resultData[i] = "D";
                    }
                
                    else if (result2 < 15){
                    resultData[i] = "E";
                    }

                    else if (result2 < 16){
                    resultData[i] = "F";
                    }

                    number = result - result1; //Reduziert die Nummer
                    i++; //erhöht den counter für den Array
                }

                //Result
                resultData = resultData.reverse();
                this.result = resultData.join('');
                this.$emit("add-history", this.result, this.selected);

                // Clean Array for next Operation
                for(i = 0; i < resultData.length; i++){
                    delete resultData[i]
                }
            }
        }
    }

</script>


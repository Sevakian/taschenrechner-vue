<template>
    <div>
    <v-container style="width:1000px;">
    <v-row> 
        <v-container style="width:500px">
        
        <!-- Input  -->
        <v-label> Input 2</v-label>

        <v-container>
            <!-- Output  -->
            <v-row> 
            <v-text-field readonly solo label="0" :value="Output"/> 
            </v-row>

            <!-- Convert Output  -->
            <v-row>
            <converter v-bind:number="CResult" v-bind:potency="potency" ></converter>
            </v-row>     
            
        </v-container>
       
        <!-- Number input  -->
        <v-label> Number Input </v-label>
        <v-container> 
            <v-row> 
                <v-btn :disabled="!NumberInput" @click="NumberHandling('1')"> 1 </v-btn> 
                <v-btn :disabled="!NumberInput" @click="NumberHandling('2')"> 2 </v-btn>
                <v-btn :disabled="!NumberInput" @click="NumberHandling('3')"> 3 </v-btn>
            </v-row>
            <v-row> 
                <v-btn :disabled="!NumberInput" @click="NumberHandling('4')"> 4 </v-btn>
                <v-btn :disabled="!NumberInput" @click="NumberHandling('5')"> 5 </v-btn>
                <v-btn :disabled="!NumberInput" @click="NumberHandling('6')"> 6 </v-btn>
            </v-row>
            <v-row>
                <v-btn :disabled="!NumberInput" @click="NumberHandling('7')"> 7 </v-btn>
                <v-btn :disabled="!NumberInput" @click="NumberHandling('8')"> 8 </v-btn>
                <v-btn :disabled="!NumberInput" @click="NumberHandling('9')"> 9 </v-btn>
            </v-row>
            <v-row> 
                <v-btn :disabled="!NumberInput" @click="NumberHandling('0')"> 0 </v-btn>
                <v-btn :disabled="!Point" @click="operatorHandling('.')"> . </v-btn>

                <!-- RESET -->
                <v-btn :disabled="!Calculation" @click="calculate()"> = </v-btn>
            </v-row>
            <v-row>
                <v-btn @click="reset"> Reset </v-btn>
                <v-btn :disabled="!NumberInput" @click="remove"> ← </v-btn>
            </v-row>
            
        </v-container>

        <!-- Operators -->
        <v-label>Operators</v-label>
        <v-container>
            <v-row>
                <v-btn  :disabled="!OperatorInput" @click="operatorHandling('+')"> + </v-btn>
                <v-btn  :disabled="!OperatorInput" @click="operatorHandling('-')"> - </v-btn>
            </v-row>
            <v-row>
                <v-btn  :disabled="!OperatorInput" @click="operatorHandling('*')"> x </v-btn>
                <v-btn  :disabled="!OperatorInput" @click="operatorHandling('/')"> ÷ </v-btn>
            </v-row>
        </v-container>
   

            <!-- Converter -->
            <v-label> Converter </v-label>
            <v-container>
                <v-row>
                    <v-btn id="decimal" :disabled="!Decimal" @click="convertHandling(10)"> Decimal </v-btn>
                    <v-btn id="binary" :disabled="!Binary" @click="convertHandling(2)"> Binary </v-btn>
                    <v-btn id="hexa" :disabled="!Hexa" @click="convertHandling(16)"> Hexa </v-btn>

                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn :disabled="!Custom" v-on="on"> Custom </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(potenc, index) in potencies" :key="index" @click="convertHandling(potenc)">
                                <v-list-item-title> {{ potenc }} </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-row>
            </v-container>
        </v-container>

        <!-- History Component  -->
        <v-container style="width:500px">
            <history :reset="HistoryReset"/> 
        </v-container>
    </v-row>
    </v-container>
    </div>
</template>

<script>
import converter from '../Components/rechner3/convert.vue';
import history from '../Components/rechner3/history.vue';
import { mapActions } from 'vuex';

export default {
    name: "Rechner2",
    components: {
        converter,
        history
    },

    data(){
        return {
            // Das was im Output angezeigt wird
            Output: null,

            CResult: 0, // Für den Converter
            Operation: '', // Die gesamte Rechenoperation in einem String 
            potency: 10,
            potencies: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],

            //Wird an das history Component geschickt
            HistoryReset: false,

            // Boolean Wert für die Regulären Rechen Operationen 
            NumberInput: true,
            OperatorInput: false,
            Calculation: false,
            Point: false,

            //Boolean Wert für die Konverter
            Decimal: false,
            Binary: true,
            Hexa: true,
            Custom: true, 
        }
    },
    
    methods: {

        ...mapActions(['addCalculation', 'removeHistory']),

        // Hier werden die Zahlen eingaben gemanaged
        NumberHandling(number){
            this.toggle(this.NumberInput, true, true, true, this.Decimal, this.Binary, this.Hexa, this.Custom, false, this.Operation)

            if (this.Output != null){
                this.Output = this.Output + number;     
                }
            if(this.Output == null){
                this.Output = number;
            }
        },

        //Hier werden die Operationen gemanaged
        operatorHandling(operator){
            this.toggle(true, false, false, false, false, false, false, false, false,  this.Operation)

            if (this.Output != null){
                    this.Output = this.Output + operator;
                }
            if(this.Output == null){
                this.Output = operator;
            }
        },

        // Diese funktion wird bei der Rechenoperation ausgeführt
        calculate(){
            this.toggle(false, this.OperatorInput, false, false, false, true, true, true, false, this.Operation)
            this.Operation = this.Output; 
            this.Output = eval(this.Output);
            this.CResult = this.Output;
            this.addCalculation(this.Operation + " = " + this.Output);     
        },

        // Hier werden die Converter Tasten gemanaged. Die Entsprechenden werte werden dann
        // in Variablen gespeichert, die dann an das Converter Component gebindet werden
        // zur weiterbearbeitung 

        convertHandling(potency){
            switch(potency){

                case 10:
                this.toggle(true, true, false, false,
                            false, true, true, true, false, '');
                this.CResult = this.Output;
                this.potency = potency;
                break;   

                case 2:
                this.toggle(false, false, false, false,
                            true, true, true, true, false, '');
                this.CResult = this.Output;
                this.potency = potency;
                break;
                            
                case 16:
                this.toggle(false, false, false, false,
                            true, true, true, true, false, '');
                this.CResult = this.Output;
                this.potency = potency;
                break;

                default:
                this.toggle(false, false, false, false,
                            true, true, true, true, false, '');
                this.CResult = this.Output;
                this.potency = potency;
                break;
            }
        },

        // Setzt sämtliche Werte zurück
        reset(){
            this.Output = null;
            this.CResult = 0,
            this.Operation = '',
            this.potency = 10;
            this.removeHistory();
            this.toggle(true, false, false, false, false, true, true, true, true, '')
        },

        // Entfernt die letze Eingabe
        remove(){
            this.Output = this.Output.slice(0, -1)
        },

        // Schaltet die Eingabetasten ein und aus
        toggle(NumberInput, OperatorInput, Calculation, Point, Decimal, Binary, Hexa, Custom, HReset, Operation){
            this.NumberInput= NumberInput; // 1
            this.OperatorInput= OperatorInput; // 2 
            this.Calculation= Calculation; // 3 
            this.Point= Point; // 4
            this.Decimal= Decimal; // 5
            this.Binary= Binary // 6
            this.Hexa= Hexa;// 7
            this.Custom= Custom; // 8 
            this.HistoryReset = HReset; // 9
            this.Operation = Operation; // 10
        }
    }, 
}
</script>
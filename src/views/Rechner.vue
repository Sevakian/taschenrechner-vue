<template>
    <div>
    <v-container style="width:800px;">
    <v-row> 
        <v-container style="width:500px">
        
        <!-- Input  -->
        <v-label> Input </v-label>

        <v-container>
            <v-row> 
            <v-text-field readonly solo label="0" :value="InputValue"/> 
            </v-row>
        </v-container>


        <!-- Output  -->
        <v-label>Output</v-label>

        <v-container> 
            <v-row>
            <v-icon x-large alt="#"> mdi-arrow-right-bold-box</v-icon>
            <h3 style="padding-top:10px;"> {{ storedNumber }} </h3>     
            </v-row>

            <v-row>
            <v-icon x-large alt="O">{{ SelectedOperatorIcon }}</v-icon>
            <h3 style="padding-top:10px;"> {{ operationNumber }} </h3>
            </v-row>

            <!-- Result -->
            <v-row> 
            <v-icon x-large alt="="> mdi-equal-box </v-icon>
            <h1> {{ resultNumber.num }} </h1>
            </v-row>
        </v-container>

       
        <!-- Number input  -->
        <v-label> Number Input </v-label>
        <v-container> 
            <v-row> 
                <v-btn :disabled="numberinput" @click="NumberHandling('1')"> 1 </v-btn> 
                <v-btn :disabled="numberinput" @click="NumberHandling('2')"> 2 </v-btn>
                <v-btn :disabled="numberinput" @click="NumberHandling('3')"> 3 </v-btn>
            </v-row>
            <v-row> 
                <v-btn :disabled="numberinput" @click="NumberHandling('4')"> 4 </v-btn>
                <v-btn :disabled="numberinput" @click="NumberHandling('5')"> 5 </v-btn>
                <v-btn :disabled="numberinput" @click="NumberHandling('6')"> 6 </v-btn>
            </v-row>
            <v-row>
                <v-btn :disabled="numberinput" @click="NumberHandling('7')"> 7 </v-btn>
                <v-btn :disabled="numberinput" @click="NumberHandling('8')"> 8 </v-btn>
                <v-btn :disabled="numberinput" @click="NumberHandling('9')"> 9 </v-btn>
            </v-row>
            <v-row> 
                <v-btn :disabled="numberinput" @click="NumberHandling('0')"> 0 </v-btn>

                <!-- RESET -->
                <v-btn @click="reset"> Reset </v-btn>
            </v-row>
        </v-container>
        <!-- Operators -->
        <v-label>Operators</v-label>
        <v-container>
            <v-row>
                <v-btn :disabled="numberinput" @click="operatorHandling(' + ')"> + </v-btn>
                <v-btn :disabled="numberinput" @click="operatorHandling(' - ')"> - </v-btn>
            </v-row>
            <v-row>
                <v-btn :disabled="numberinput" @click="operatorHandling(' x ')"> x </v-btn>
                <v-btn :disabled="numberinput" @click="operatorHandling(' ÷ ')"> ÷ </v-btn>
            </v-row>
        </v-container>
   

            <!-- Converter -->
            <v-label> Converter </v-label>
            <v-container>
                <v-row>
                    <v-btn id="decimal" :disabled="decimal" @click="convert(10, $event)"> Decimal </v-btn>
                    <v-btn id="binary" :disabled="binary" @click="convert(2, $event)"> Binary </v-btn>
                    <v-btn id="hexa" :disabled="hexa" @click="convert(16, $event)"> Hexa </v-btn>
                    <v-btn id="custom" :disabled="custom"> Custom </v-btn>
                </v-row>
            </v-container>
        </v-container>

        <v-container style="width:300px;">
        <v-label> History </v-label>
            <div v-for="item in HistoryOutput" :key="item[0]">
            <p> 
                
                <span> Process: {{ item[0] }} </span> <br>

                <v-icon x-large> mdi-arrow-right-bold-box </v-icon> 
                <span> Previous Result: {{ item[1] }} </span> <br>

                <v-icon x-large> {{ item[3] }} </v-icon> 
                <span> Operating Number: {{ item[2] }} </span> <br>

                <v-icon x-large> mdi-equal-box </v-icon>
                <span> New Result: {{ item[4] }} </span> <br><br>
                 
            </p>
            <hr>
            <br>
            </div>
        </v-container>
    </v-row>
    </v-container>
    </div>
</template>

<script>
export default {
    name: "Rechner",
    components: {
        
    },

    data() {
        return {
            
            SelectedOperatorIcon: "mdi-checkbox-blank-outline",
            SelectedOperator: null, 
            calcProcess: false,

            InputValue: null,
            HistoryOutput: [],
           
            storedNumber: null,
            operationNumber: null,
            resultNumber: {num: null, bool: false},
            counter: 0,

            
            // Disable
            numberinput: false,
            decimal: true,
            binary: false,
            hexa: false,
            custom: false, 
        }
    },
    
    methods: {

        // Set everything back to the Default values
        reset(){
            this.SelectedOperatorIcon = "mdi-checkbox-blank-outline";
            this.SelectedOperator = null, 
            this.calcProcess = false,

            this.InputValue = null;

            var _counter = 0;
            var _StorageNumber = null;
            var _OperatingNumber = null;
            var _OperatingIcon = 'mdi-checkbox-blank-outline';
            var _NewResult = null

            for(var i = 0; i < this.HistoryOutput.length; i++){
                this.HistoryOutput[i] = [      
                                            _counter, 
                                            _StorageNumber, 
                                            _OperatingNumber ,
                                            _OperatingIcon, 
                                            _NewResult, 
                ]
            }

            this.item.key = 0;
            
     
            this.storedNumber = null,
            this.operationNumber = null;
            this.resultNumber = {num: null, bool: false},
            this.counter = null,

            // Disable 
            this.numberinput = false,
            this.decimal = true;
            this.binary = false;
            this.hexa = false;
            this.custom = false;
        },
       

        // Input is being handled here 
        NumberHandling(input){

            // Checks if the input value is a number. Is calling the previous "Check" function to collect the number values
            var counter = 0;
            while(counter < 10){
                switch(input){
                    case `${counter}`:
                    if (this.InputValue != null){
                        this.InputValue = this.InputValue + input;
                    }

                    if(this.InputValue == null){
                        this.InputValue = input;
                    }
                    break;
                } 
            counter++;
            }
            this.output(true);
        },

        output(trigger){
            if(!this.calcProcess){
                this.storedNumber = this.InputValue;
            }
            if(this.calcProcess){
                if(trigger == false){
                    this.InputValue = null;
                }

                if(trigger == true){
                    this.operationNumber = this.InputValue;
                    this.resultNumber.num = this.calculation(this.operationNumber, this.storedNumber); 
                    this.resultNumber.bool = true;
                }        
            }
        },

        calculation(OperatingNumber, StoredNumber){
            if(this.SelectedOperator == "+"){
                return parseInt(StoredNumber) + parseInt(OperatingNumber);  
            }

            if(this.SelectedOperator == "-"){
                return parseInt(StoredNumber) - parseInt(OperatingNumber)
            }

            if(this.SelectedOperator == "x"){
                return parseInt(StoredNumber) * parseInt(OperatingNumber)
            }

            if(this.SelectedOperator == "÷"){
                return parseInt(StoredNumber) / parseInt(OperatingNumber)
            }

        },

        operatorHandling(input){
            console.log(this.HistoryOutput);
            // Checks if the input value is a operator. If true then the calculation operation is carried out
            switch(input){
                case " + ":
                    this.calcProcess = true; 
                    this.SelectedOperator = "+";
                    this.output(false);
                    if(this.resultNumber.bool == true){
                        this.save(this.storedNumber, this.operationNumber, this.SelectedOperatorIcon);
                        this.storedNumber = this.resultNumber.num;
                        this.operationNumber = 0;
                        this.resultNumber.bool = false;
                    }
                    this.SelectedOperatorIcon = 'mdi-plus-box';
                    break;

                    case " - ":
                    this.calcProcess = true; 
                    this.SelectedOperator = "-";
                    this.output(false);
                    
                    if(this.resultNumber.bool == true){
                        this.save(this.storedNumber, this.operationNumber, this.SelectedOperatorIcon);
                        this.storedNumber = this.resultNumber.num;
                        this.operationNumber = 0;
                        this.resultNumber.bool = false;
                    }
                    this.SelectedOperatorIcon = 'mdi-minus-box';
                    break;

                    case " x ":
                    this.calcProcess = true; 
                    this.SelectedOperator = "x";
                    this.output(false);
                    
                    if(this.resultNumber.bool == true){
                        this.save(this.storedNumber, this.operationNumber, this.SelectedOperatorIcon);
                        this.storedNumber = this.resultNumber.num;
                        this.operationNumber = 0;
                        this.resultNumber.bool = false;
                    }
                    this.SelectedOperatorIcon = 'mdi-multiplication-box';
                    break;

                    case " ÷ ":
                    this.calcProcess = true; 
                    this.SelectedOperator = "÷";
                    this.output(false);
                    if(this.resultNumber.bool == true){
                        this.save(this.storedNumber, this.operationNumber, this.SelectedOperatorIcon);
                        this.storedNumber = this.resultNumber.num;
                        this.operationNumber = 0;
                    }
                    this.SelectedOperatorIcon = 'mdi-division-box';
                    break;
                }
        },

        save(StorageNumber, OperatingNumber, OperatingIcon){
            var _counter = this.counter;
            var _StorageNumber = StorageNumber;
            var _OperatingNumber = OperatingNumber;
            var _OperatingIcon = OperatingIcon;
            var _NewResult = this.resultNumber.num;
            

            // console.log(_counter);
            // console.log(_StorageNumber);
            // console.log(_OperatingNumber);
            // console.log(_OperatingIcon);
            // console.log(_NewResult);
            // console.log(_EqualIcon);

            this.HistoryOutput[this.counter] = [ 
                                            _counter, 
                                            _StorageNumber, 
                                            _OperatingNumber,
                                            _OperatingIcon, 
                                            _NewResult,                                        
                                         ];

            // this.prevResult.snum = StorageNumber;
            // this.prevResult.onum = OperationNumber;
            // this.prevResult.icon = OperatingIcon;

            // console.log("Process: " + this.counter)
            // console.log("Previous Result: " + this.prevResult.snum);
            // console.log("Operating Number: " + this.prevResult.onum);
            // console.log("Operating Method: " + this.prevResult.icon);
            // console.log("New Result: " + this.resultNumber.num);

            this.counter++;
        },

        convert(potency, event){

            if(potency == 10){
                this.numberinput = false;
                this.decimal = true;
                this.binary = false;
                this.hexa = false;
                this.custom = false;
            }
            
            if(potency == 2){
                this.numberinput = true;
                this.decimal = false;
                this.binary = true;
                this.hexa = true;
                this.custom = true; 
            }

            if(potency == 16){
                this.numberinput = true;
                this.decimal = false;
                this.binary = true;
                this.hexa = true;
                this.custom = true;
            }
         
            console.log(potency);
            console.log(event);
        }
    }
    
}
</script>

// Noch zu erledigen:
// - Potenz Converter programmieren
// - Eingabe Zahlen mit Komma
// - Zusätzliche Rechenoperationen (^2 und Quadrawurzel zb)
// - Struktur und Design verbessern 
// - Ans/ Pi/ Minus Zahl
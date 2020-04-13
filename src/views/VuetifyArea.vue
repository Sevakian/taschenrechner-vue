<template> 
<div> 
<!-- Text  -->
    <h1 class="display-3"> Text </h1>
    <p class="red white--text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores accusamus deleniti harum quae iusto sunt perferendis neque modi suscipit beatae vel eveniet illo, sequi excepturi expedita magnam nulla, repellendus sit?</p>
    <p class="purple darken-3 green--text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus quod mollitia eum alias, neque cum sapiente quidem ducimus recusandae accusamus atque earum sunt corporis qui eos quasi explicabo veniam. </p>
    <h1 class="display-4 "> Massive Display H1</h1>
    <h1 class="display-1"> Massive Display H1</h1>
    <p class="headline"> Hallo </p>
    <p class="subheading"> Hallo</p>
    <p class="caption"> Hallo</p>
    <p class="text-uppercase">uppercase</p>
    <hr>

<!-- Button  -->
    <h1 class="display-3">Button</h1>
    <v-btn class="indigo white--text"> Klick </v-btn>
    <v-btn color="indigo"> Klick</v-btn>
    <v-btn depressed color="indigo"> Klick</v-btn>
    <v-btn text color="indigo"> Klick </v-btn>

    <v-btn depressed class="indigo white--text">
        <v-icon left> mdi-email </v-icon>
        <span> Email me </span>
    </v-btn>

    <v-btn depressed small class="indigo white--text">
        <v-icon left> mdi-email </v-icon>
        <span> Email me </span>
    </v-btn>

    <v-btn depressed fab class="indigo white--text">
        <v-icon large> mdi-email </v-icon>
    </v-btn>


    <!-- Grid System -->
    <v-container  class="my-5">

        <v-layout row wrap>
            <v-flex xs12 md6> 
              <v-btn outlined block class="primary"> 1 </v-btn>
            </v-flex>
            <v-flex xs4 md2> 
              <v-btn outlined block class="primary"> 2 </v-btn>
            </v-flex>
            <v-flex xs4 md2> 
              <v-btn outlined block class="primary"> 2 </v-btn>
            </v-flex>
            <v-flex xs4 md2> 
              <v-btn outlined block class="primary"> 2 </v-btn>
            </v-flex>
          </v-layout>

          <v-layout row wrap justify-space-between>
            <v-flex xs4 md3>
              <v-btn outlined block class="success"> 1 </v-btn>
            </v-flex>
            <v-flex xs4 md3>
              <v-btn outlined block class="success"> 2 </v-btn>
            </v-flex>
          </v-layout>

        <!-- <v-card text>
          <v-layer row wrap>
            <v-flex xs12 md6>
              <div class="caption grey--text">Project title</div>
            </v-flex>
          </v-layer>
        </v-card> -->

    </v-container>

</div>
</template>
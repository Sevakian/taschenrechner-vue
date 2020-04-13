<template> 
<v-app> 
  <navbar></navbar>

  <v-content> 
  <Header/>
  <router-view></router-view>
  </v-content>
  
</v-app>
</template>

<script>
import Header from './Components/layout/header.vue'
import navbar from './Components/layout/navbar.vue'


export default {
  name: 'App',
  components: {
    navbar, Header,
  },

  data: () => ({
    
  }),
};
</script>

<style>

  

</style>
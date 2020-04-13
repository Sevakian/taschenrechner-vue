<template>
<nav>
    
    <v-app-bar class="indigo" app>
        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title class="text-uppercase white--text"> 
             <span class="font-weight-light"> Der </span>
             <span> Header </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

            <v-btn right @click="log" text color="white"> 
                <span> Consolen Informationen zum $Route </span>
                <v-icon right> mdi-home</v-icon>
            </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="indigo" app>
        <v-list v-for="link in links" :key="link.text">
            <v-list-item :to="link.route">

                <v-list-item-action>
                    <v-icon color="white">
                        {{ link.icon }}
                    </v-icon>
                </v-list-item-action>

                <v-list-item-content>
                    <v-list-item-title class="white--text">
                        {{ link.text}}
                    </v-list-item-title>
                </v-list-item-content>
                
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

</nav>
</template>


<script>
export default {
    name: 'navbar',

    data(){
        return {
            drawer: false,
            links: [
                {icon: "mdi-view-dashboard", text: 'Home', route: '/Home/Home'},
                {icon: "mdi-account", text: 'About', route: '/About/About'},
                {icon: "mdi-calculator", text: 'Rechner1' , route: '/Rechner/Rechner1'},
                {icon: "mdi-calculator", text: 'Rechner2' , route: '/Rechner2/Rechner2'},
                {icon: "mdi-calculator", text: 'Rechner3' , route: '/Rechner3/Rechner3Vuex'},
                {icon: "mdi-alpha-e", text: 'Vuetify Test Area' , route: '/VuetifyArea/VuetifyTestZone'},
                {icon: "E", text: 'Todos Test', route: '/TodoMain/Todo'},
                {icon: "E", text: 'Vuex', route: '/Vuex/Vuex'},
                {icon: "E", text: 'VuexTodos', route: '/VuexTodos/VuexTodos'}
            ]
        }
    },
    methods: {
        log(){
            console.log(this.$route);

        }
    }
}
</script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Rechner from '../views/Rechner.vue'
import Rechner2 from '../views/Rechner2.vue' 
import Rechner3 from '../views/Rechner3.vue'
import VuetifyArea from '../views/VuetifyArea.vue'
import TodoMain from '../views/TodosMain.vue'
import Vuex from '../views/VuexTutorial.vue'
import VuexTodos from '../views/VuexTodos.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home  
  },
  {
    path: '/about/:title',
    name: 'About',
    component: About
  
  },
  {
    path: '/rechner/:title',
    name: 'Rechner',
    component: Rechner
  },
  {
    path: '/rechner2/:title',
    name: 'Rechner2',
    component: Rechner2
  },
  {
    path: '/rechner3/:title',
    name: 'Rechner3',
    component: Rechner3
  },
  {
    path: '/vuetifyArea/:title',
    name: 'vuetifyArea',
    component: VuetifyArea,
  },
  {
    path: '/TodoMain/:title',
    name: 'TodoMain',
    component: TodoMain
  },
  {
    path: '/Vuex/:title',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/VuexTodos/:title',
    name: 'VuexTodos',
    component: VuexTodos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

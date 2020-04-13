import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import productlist from './modules/productlist'
import rechner from './modules/rechner'

Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
      todos,
      productlist,
      rechner,
    }
})

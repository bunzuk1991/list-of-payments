import Vue from 'vue'
import Vuex from 'vuex'
import Shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    Shared
  ]
})

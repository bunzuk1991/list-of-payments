import Vue from 'vue'
import Vuex from 'vuex'
import Shared from './shared'
import Organisations from './organisations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: [
    Shared,
    Organisations
  ]
})

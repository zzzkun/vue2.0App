import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
let defaultcity = '广州'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state,

  mutations
})

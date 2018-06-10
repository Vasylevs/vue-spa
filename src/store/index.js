import Vue from 'vue'
import Vuex from 'vuex'
import adds from './adds'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    adds,
    user,
    shared
  }
})

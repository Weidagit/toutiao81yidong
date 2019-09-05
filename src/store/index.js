import Vue from 'vue'
import Vuex from 'vuex'
import * as storsgeTools from '../utils/localStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: storsgeTools.getItem('user')
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      storsgeTools.setItem('user', user)
    }
  },
  actions: {

  }
})

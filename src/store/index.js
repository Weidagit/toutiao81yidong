import Vue from 'vue'
import Vuex from 'vuex'
import * as localStorageToos from '../utils/localStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorageToos.getItem('user')
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      localStorageToos.setItem('user', user)
    }
  },
  actions: {

  }
})

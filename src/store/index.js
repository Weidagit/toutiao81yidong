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
      // 把登录状态存储到本地存储中
      storsgeTools.setItem('user', user)
    }
  },
  actions: {

  }
})

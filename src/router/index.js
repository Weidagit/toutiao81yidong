import Vue from 'vue'
import Router from 'vue-router'
import Tabbad from '../views/Tabbad'
import Home from '../views/home/'
// import Login from '../views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',

      component: Tabbad,
      children: [
        {
          path: '',
          name: 'home',
          component: Home

        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
    }
  ]
})

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.less'

import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)
Validator.localize('zhCN', zhCN)
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')

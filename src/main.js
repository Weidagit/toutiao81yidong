import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.less'

import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate, {
  // 文本框中触发验证的事件，默认是input
  // 如果为空的话，文本框输入过程中不验证，需要调用validate方法验证
  events: ''
})
Vue.use(VeeValidate)
Validator.localize('zhCN', zhCN)
Vue.config.productionTip = false
Vue.use(Vant)
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import YoungUI from './packages/index'
Vue.use(YoungUI) // 默认调用install方法
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

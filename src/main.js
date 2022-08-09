import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';

// 动态设置 rem 基准值
import 'amfe-flexible'

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from './router/axios';
import VueAxios from 'vue-axios';
import App from './App'
import router from './router'
import store from './store/index.js'
import Vuex from 'vuex'
import './components/global.less'
import KFormDesign from './components/k-form-design/packages'
import './components/k-form-design/static/styles/form-design.less'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
Vue.use(KFormDesign)


Vue.use(Antd)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

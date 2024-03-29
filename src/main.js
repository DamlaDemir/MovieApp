  // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
import storeOptions from './stores/store'
Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store(storeOptions);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

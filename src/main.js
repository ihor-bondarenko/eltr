// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'bootstrap'
import {ipcRenderer} from './helpers/ipc-manager'
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    printers: []
  },
  mutations: {
    setPrinterList (state, list) {
      console.log(list)
      state.printers = list
    }
  }
})
if (typeof (ipcRenderer) !== 'undefined') {
  ipcRenderer.on('list-printers', function (event, arg) {
    store.commit('setPrinterList', arg)
  })
  ipcRenderer.send('get-printers', 'ping')
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

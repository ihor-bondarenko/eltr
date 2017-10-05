// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'bootstrap'
import vuexI18n from 'vuex-i18n';
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
Vue.use(vuexI18n.plugin, store);
const translationsEn = {
  'content': 'This is some {type} content'
};

// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
const translationsDe = {
  'My nice title': 'Ein schöner Titel',
  'content': 'Dies ist ein toller Inhalt'
};
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);

// set the start locale to use
Vue.i18n.set('en');
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

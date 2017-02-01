// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import './assets/css/normalize.css'
import './assets/css/skeleton.css'

/* eslint-disable no-new */

Vue.use(VueResource)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

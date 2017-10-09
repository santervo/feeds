import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import './filters'

Vue.use(Vuex)
Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  new Vue(require('./app').default).$mount('app')
})

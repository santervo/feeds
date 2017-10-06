import Vue from 'vue'
import App from './components/app.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  new Vue(App).$mount('app')
})

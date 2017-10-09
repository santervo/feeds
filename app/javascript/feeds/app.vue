<template>
  <router-view></router-view>
</template>

<script>
import router from './router'
import store from './store'

import './uikit'
import './styles.scss'

export default {
  router,
  store
}
</script>

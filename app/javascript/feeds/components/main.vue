<template>
  <div class="main uk-flex uk-flex-column">
    <app-header></app-header>
    <div class="uk-flex-1 uk-flex uk-flex-row">
      <div class="side-nav border-right">
        <app-nav></app-nav>
      </div>
      <div class="overflow-scroll uk-flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header'
import Nav from './nav'

export default {
  components: {
    'app-header': Header,
    'app-nav': Nav
  },

  created() {
    this.$store.dispatch('fetchFeeds')
  }
}
</script>

<style>
.main {
  height: 100%;
}

.side-nav {
  width: 250px;
}
</style>

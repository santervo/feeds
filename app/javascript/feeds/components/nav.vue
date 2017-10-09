<template>
  <div class="uk-padding-small overflow-scroll">
    <ul class="uk-nav uk-nav-default">
      <li>
        <router-link to="/feeds/new">
          <span class="uk-margin-small-right" uk-icon="icon: plus"></span> Add feed
        </router-link>
      </li>
      <li class="uk-nav-header">Feeds</li>
      <li :class="{ 'uk-active': feedIsActive(feed.id) }" v-for="feed in feeds" :key="feed.id">
        <router-link :to="{ name: 'feed', params: { feedId: feed.id } }">
          {{ feed.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    feeds() {
      return this.$store.getters.allFeeds
    },
  },
  methods: {
    feedIsActive(feedId) {
      return this.$route.name === 'feed' && this.$route.params.feedId == feedId
    }
  }
}
</script>


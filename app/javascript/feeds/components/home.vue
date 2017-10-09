<template>
  <div class="home uk-padding">
    <feed-entry :key="feedEntry.id" :feed-entry="feedEntry" v-for="feedEntry in feedEntries"></feed-entry>
  </div>
</template>

<script>
import sortBy from 'lodash/sortby'
import FeedEntry from './feed-entry'

export default {
  computed: {
    feedEntries() {
      return sortBy(this.$store.getters.allFeedEntries, 'date').reverse()
    }
  },
  components: {
    'feed-entry': FeedEntry
  }
}
</script>

<style>
</style>


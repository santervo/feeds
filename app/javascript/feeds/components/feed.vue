<template>
  <div class="feed uk-padding">
    <feed-entry :key="feedEntry.id" :feed-entry="feedEntry" v-for="feedEntry in feedEntries"></feed-entry>
  </div>
</template>

<script>
import sortBy from 'lodash/sortby'
import FeedEntry from './feed-entry'

export default {
  computed: {
    feedEntries() {
      return sortBy(this.$store.getters.feedEntriesByFeedId(this.$route.params.feedId), 'date').reverse()
    }
  },
  components: {
    'feed-entry': FeedEntry
  }
}
</script>


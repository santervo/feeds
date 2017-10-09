import Vue from 'vue'
import uniq from 'lodash/uniq'

import FeedEntryService from '../services/feed-entry.service'

export default {
  state: {
    byId: {},
    idsByFeedId: {}
  },

  getters: {
    allFeedEntries(state) {
      return Object.keys(state.byId).map(id => state.byId[id])
    },
    feedEntriesByFeedId(state) {
      return feedId => (state.idsByFeedId[feedId] || []).map(id => state.byId[id])
    }
  },

  mutations: {
    ADD_FEED_ENTRY(state, feedEntry) {
      Vue.set(state.byId, feedEntry.id, feedEntry)
      Vue.set(state.idsByFeedId, feedEntry.feed_id, uniq([...(state.idsByFeedId[feedEntry.feed_id] || []), feedEntry.id]))
    }
  },

  actions: {
    fetchFeedEntries({ commit }, feedId) {
      return FeedEntryService.getFeedEntries(feedId)
        .then(feedEntries => {
          feedEntries.forEach(feedEntry => {
            commit('ADD_FEED_ENTRY', feedEntry)
          })
        })
    }
  }
}
import Vue from 'vue'

import FeedService from '../services/feed.service'

export default {
  state: {
    byId: {}
  },
  getters: {
    allFeeds(state) {
      return Object.keys(state.byId)
        .map(id => state.byId[id])
    }
  },
  mutations: {
    ADD_FEED(state, feed) {
      Vue.set(state.byId, feed.id, feed)
    }
  },
  actions: {
    fetchFeeds(store) {
      return FeedService.getFeeds()
        .then(feeds => (
          Promise.all(
            feeds.map(feed => addFeed(store, feed))
          )
        ))
    },
    addFeed(store, attrs) {
      return FeedService.createFeed(attrs)
        .then(feed => addFeed(store, feed))
    }
  }
}

const addFeed = ({ commit, dispatch }, feed) => {
  commit('ADD_FEED', feed)
  return dispatch('fetchFeedEntries', feed.id)
}
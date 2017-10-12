import Vue from 'vue'
import UIkit from 'uikit'

import FeedService from '../services/feed.service'
import FeedChannelService from '../services/feed-channel.service'

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
    // Subscribe for new entries
    .then(() => FeedChannelService.subscribe(feed.id, {
      received({ message, payload }) {
        if (message === 'feed_entry:created') {
          commit('ADD_FEED_ENTRY', payload)
          UIkit.notification(payload.title, { pos: 'top-right', status: 'primary' })
        }
      }
    }))
}
import Vuex from 'vuex'

import feeds from './feeds'
import feedEntries from './feed-entries'

const state = {}

const modules = { feeds, feedEntries }

export default new Vuex.Store({
  state,
  modules
})
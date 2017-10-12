import cable from '../cable'

const channel = "FeedChannel"
const subscriptions = {}

export default {
  subscribe(feed_id, handler) {
    if (subscriptions[feed_id]) {
      subscriptions[feed_id].unsubscribe()
    }

    subscriptions[feed_id] = cable.subscriptions.create({ channel, feed_id }, handler)
  }
}
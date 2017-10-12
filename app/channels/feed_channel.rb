class FeedChannel < ApplicationCable::Channel
  def subscribed
    feed_id = params[:feed_id]
    feed = Feed.find feed_id
    stream_for feed
  end
end

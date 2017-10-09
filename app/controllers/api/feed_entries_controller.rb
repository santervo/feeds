class Api::FeedEntriesController < ActionController::Base

  def index
    feed = Feed.find params[:feed_id]

    feed_entries = feed.feed_entries.order("date desc").limit(20)

    render json: feed_entries
  end
end
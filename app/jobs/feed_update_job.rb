class FeedUpdateJob < ApplicationJob
  queue_as :default

  def perform(*args)
    fs = FeedService.new

    Rails.logger.info "Looking for updateable feeds"
    feeds = Feed.where("fetched_at < ?", 15.minutes.ago)
    feeds.each do |feed|
      Rails.logger.info "Updating feed #{feed.title}"
      fs.update_feed feed
    end
  end
end

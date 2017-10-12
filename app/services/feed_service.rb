require 'rss'
require 'open-uri'

class FeedService
  def create_feed url
    rss = fetch_rss url
    feed = Feed.from_rss rss
    feed.url = url
    feed.fetched_at = Time.now
    feed.save!
    feed
  end

  def update_feed feed
    rss = fetch_rss feed.url
    rss.items.each do |item|
      unless feed.feed_entries.where(link: item.link).any?
        feed.feed_entries.create title: item.title, link: item.link, summary: item.description, date: item.date
      end
    end
    feed.update_attribute :fetched_at, Time.now
    feed
  end

  private

  def fetch_rss url
    open(url) do |rss|
      RSS::Parser.parse(rss) || raise("error")
    end
  rescue => err
    Rails.logger.error "Error fetching rss from url #{url}"
    Rails.logger.error err
    raise FeedError.new
  end
end
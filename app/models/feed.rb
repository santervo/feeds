class Feed < ApplicationRecord
  has_many :feed_entries, dependent: :destroy

  validates :url, presence: true, uniqueness: true
  validates :title, presence: true
  
  def self.from_rss rss
    feed = self.new
    channel = rss.channel
    feed.title = channel.title
    feed.link = channel.link
    feed.summary = channel.description
    feed.external_id = channel.try(:id) || channel.link
    rss.items.each do |item|
      entry = feed.feed_entries.build
      entry.title = item.title
      entry.link = item.link
      entry.summary = item.description
      entry.date = item.date
    end
    feed
  end
end

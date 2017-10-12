class FeedEntry < ApplicationRecord
  belongs_to :feed

  validates :title, presence: true
  validates :link, presence: true, uniqueness: { scope: :feed_id }

  after_create :broadcast_created

  private

  def broadcast_created
    FeedChannel.broadcast_to self.feed, message: 'feed_entry:created', payload: self.attributes
  end
end

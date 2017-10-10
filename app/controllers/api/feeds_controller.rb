require 'rss'
require 'open-uri'

class Api::FeedsController < ActionController::Base

  def index
    feeds = Feed.all

    render json: feeds
  end

  def create
    attrs = params.require(:feed).permit(:url)

    rssfeed = fetch_rss_feed attrs[:url]
    feed = Feed.from_rss rssfeed
    feed.url = attrs[:url]
    feed.fetched_at = Time.now
    feed.save!
    render json: feed
  rescue ActiveRecord::RecordInvalid => err
    errors = err.record.errors
    errors_hash = errors.keys.map { |k| [k, errors.full_messages_for(k).first] }.to_h
    render json: { errors: errors_hash }, status: :unprocessable_entity
  rescue RssError => err
    render json: err, status: :unprocessable_entity
  end

  private

  def fetch_rss_feed url
    open(url) do |rss|
      RSS::Parser.parse(rss) || raise("error")
    end
  rescue 
    raise RssError.new
  end

  class RssError < StandardError
    def as_json opts = {}
      {
        errors: {
          url: "Url was not valid rss feed"
        }
      }
    end
  end
end
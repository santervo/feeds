require 'rss'
require 'open-uri'

class Api::FeedsController < ActionController::Base

  def index
    feeds = Feed.all

    render json: feeds
  end

  def create
    attrs = params.require(:feed).permit(:url)

    open attrs[:url] do |rss|
      begin
        rssfeed = RSS::Parser.parse(rss)
      rescue
        return render json: { error: "Invalid feed." }, status: :bad_request
      end

      feed = Feed.from_rss rssfeed
      feed.fetched_at = Time.now
      feed.save!

      render json: feed
    end
  rescue Errno::ENOENT
    render json: { error:  "Bad request." }, status: :bad_request
  rescue SocketError => err
    render json: { error:  "Not found." }, status: :not_found
  end
end
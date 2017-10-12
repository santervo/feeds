class Api::FeedsController < ActionController::Base

  def index
    feeds = Feed.all

    render json: feeds
  end

  def create
    attrs = params.require(:feed).permit(:url)

    feed_service = FeedService.new
    feed = feed_service.create_feed attrs[:url]

    render json: feed
  rescue ActiveRecord::RecordInvalid => err
    errors = err.record.errors
    errors_hash = errors.keys.map { |k| [k, errors.full_messages_for(k).first] }.to_h
    render json: { errors: errors_hash }, status: :unprocessable_entity
  rescue FeedError => err
    render json: err, status: :unprocessable_entity
  end
end
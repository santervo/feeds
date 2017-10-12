class FeedError < StandardError
  def as_json opts = {}
    {
      errors: {
        url: "Url was not valid rss feed"
      }
    }
  end
end
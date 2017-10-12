require 'rufus-scheduler'

scheduler = Rufus::Scheduler.new

scheduler.every "1m" do
  FeedUpdateJob.perform_now
end

scheduler.join
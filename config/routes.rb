Rails.application.routes.draw do

  root to: 'application#index'
  
  namespace :api do
    resources :feeds do
      resources :feed_entries
    end
  end
end

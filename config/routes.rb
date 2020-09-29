Rails.application.routes.draw do

  # Api routes, api call will be defined
  namespace :api do
    resources :todos 
    
    # resources :todos do
    #   resources :comments
    # end
  end
end
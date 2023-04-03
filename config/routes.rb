Rails.application.routes.draw do
  
  resources :messages, only: [:index, :create, :destroy]
  resources :signups, only: [:index, :create, :show, :destroy]
  resources :activities, only: [:index, :show]
  resources :campers, only: [:index, :show, :create, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

end

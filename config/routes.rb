Rails.application.routes.draw do

  root to: 'home#index'

  resources :parents, only: [:index] do
    resources :admissions, only: [:index, :new, :create]
    resources :reviews, only: [:new, :create]
    resources :assignments, only: [:index]
    resources :reports, only: [:index]
  end
  # resources :admins
  # resources :teachers

  get '/register', to: 'parents#new'
  post '/parents', to: 'parents#create'

  get '/login', to: 'session#new'
  post '/login', to: 'session#create'
  get '/logout', to: 'session#destroy'

end

Rails.application.routes.draw do

  root to: 'home#index'

  #Parent pages
  resources :parents, only: [:index, :show] do
    resources :admissions, only: [:index, :new, :create]
    resources :reviews, only: [:new, :create]
    resources :assignments, only: [:index]
    resources :reports, only: [:index]
  end
  
  #Admin pages
  namespace :admin do
    root to: 'admin#index'
    resources :reports, only: [:index]
    resources :teachers, only: [:index, :create]
    resources :subjects, only: [:index, :create]
    resources :programs, only: [:index, :create]
  end

  #Teacher pages
  resources :teachers, only: [:index, :show] do
    resources :profiles, only: [:index, :update]
    resources :assignments, only: [:index, :update, :create]
    resources :programs, only: [:index]
    resources :reviews, only: [:index]
  end

  get '/register', to: 'parents#new'
  post '/parents', to: 'parents#create'

  get '/login', to: 'session#new'
  get '/session_info', to: 'session#show'
  post '/login', to: 'session#create'
  get '/logout', to: 'session#destroy'

  
end

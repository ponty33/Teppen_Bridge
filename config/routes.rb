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
  # resources :admins do
    # resources :admin-reports
    # resources :teachers
    # resources :subjects
    # resources :manage-programs
  # end
  
  #Teacher pages
  # resources :teachers do
    # resources :profiles
    # resources :student-assignments
    # resources :make-assignments
    # resources :programs
    # resources :parent-reviews
  # end

  get '/register', to: 'parents#new'
  post '/parents', to: 'parents#create'

  get '/login', to: 'session#new'
  get '/session_info', to: 'session#show'
  post '/login', to: 'session#create'
  get '/logout', to: 'session#destroy'


  #test json
  get '/api', to: 'api#index'

  
end

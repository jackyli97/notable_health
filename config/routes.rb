Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :physicians, only: [:index]

    resources :patients, only: [:index] do
        member do
            get :index
          end
      end
  end
  root to: "static_pages#root"
end
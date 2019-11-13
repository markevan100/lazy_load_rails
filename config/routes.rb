Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'welcome#index'
  get 'welcome/photos', to: 'welcome#photos'
  get 'welcome/photos_lazy_load', to: 'welcome#photos_lazy_load'
  get 'welcome/photos_webp', to: 'welcome#photos_webp'
  get 'welcome/photos_lazy_load_webp', to: 'welcome#photos_lazy_load_webp'
end

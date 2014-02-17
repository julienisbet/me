# Require config/environment.rb
require ::File.expand_path('../environment',  __FILE__)

set :app_file, __FILE__

configure do
  set :views, File.join(Sinatra::Application.root, "app", "views")

  enable :cross_origin

end

run Sinatra::Application
require 'sinatra'
require 'sinatra/base'
require 'sinatra/param'
require 'sinatra/json'
require 'sinatra-initializers'
require 'active_model_serializers'
require 'mongoid'
require 'carrierwave/mongoid'
require './model/Task.rb'
require './serializers/TaskSerializer.rb'
require 'dotenv'
require './workers/image'

Dotenv.load

class App < Sinatra::Application
  register Sinatra::Initializers

  configure do
    set :raise_sinatra_param_exceptions, true
    set :show_exceptions, true
    #set :public_folder, 'uploads', 'public'
  end

  CarrierWave.configure do |c|
    c.root = File.join(Dir.pwd, "uploads/")
    c.asset_host = ENV['ASSETS_HOST']
  end

  Mongoid.load!("./mongoid.yml", :development)


  post '/tasks' do
    param :image, String, required: true

    task = Task.new
    task.remote_image_url = params[:image]
    task.save!

    Workers::Image::perform_async(task.id)
  end

  get '/tasks' do
    tasks = Task.all
    serializer = ActiveModel::Serializer.serializer_for(tasks, {})
    content_type :json
    serializer.new(tasks).to_json
  end

  delete '/task/:id' do
    begin
      Task.find(id: params[:id]).destroy
      status 200
    rescue Mongoid::Errors::DocumentNotFound
      status 404
    end
  end

  get '/' do
    send_file 'public/index.html'
  end

  get '/task/:id' do
    begin
      t = Task.find(params[:id])
      puts t.image
      send_file "uploads/#{t.image}"
    rescue Mongoid::Errors::DocumentNotFound
      status 404
      erb :not_found
    end
  end
end

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'json'

get '/' do

  unless params['title'].nil?

    #date = HTTParty.get("http://www.omdbapi.com/", query:{ s: params[:title]})
    url = "http://omdbapi.com/?s=#{ params[:title] }".gsub(' ', '+')
    data = HTTParty.get(url)
    ruby_hash = JSON.parse(data.body)   
    @movies = ruby_hash["Search"]

  end

  erb :movies

end

get '/*' do 
  redirect to ('/')
end
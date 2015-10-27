json.array!(@cats) do |cat|
  json.extract! cat, :id, :breed, :origin, :image, :description
  json.url cat_url(cat, format: :json)
end

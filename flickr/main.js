$(document).ready(function(){
  $('.search-button').on('click', searchFlickr);
  $('#clear').on('click', clearPhotos);
  $(window).on('scroll', maybeLoad);  //on scroll we ll load more images
});


    var displayData = function(data){
      var photosArray = data["photos"]["photo"];

      for(var i = 0; i <= 10; i++){
        var photo = photosArray[i];

        var photoUrl = ['https://farm', 
            photo.farm, 
            '.staticflickr.com/', 
            photo.server,
            '/',
            photo.id,
            '_',
            photo.secret,
            '_z.jpg' ].join('');
        var image = $('<img>');
        image.attr("src", photoUrl);
        $('body').append(image);
      }
    }

  var searchFlickr function(){
    console.log("click!");

    var text = $('.search-input').val();

    $.ajax({
      url: "https://api.flickr.com/services/rest/",
      type: "GET",
      dataType: "jsonp",
      jsonp: "jsoncallback",
      data: {
        method: "flickr.photos.search",
        text: text,
        api_key: "0f22f51640ea8a231f4f054db5d14ef8",
        format: "json"
      },
      success: function(data){
        console.log("success", data);

        displayData(data);
      },
      error: function(xhr, status, message){
        console.log("error", status, message);
      }
    });
  });
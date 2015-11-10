
$(document).ready(function(){
  song = new mixtape.Song({
    name: "Poison",
    artist: "Alice Cooper"
  });

  song2 = new mixtape.Song({
    name: "Hit the Road Jack",
    artist: "Ray Charles"
  });

  songList = new mixtape.SongList([song, song2]);
  mixtapeView = new mixtape.MixtapeView(songList);
  mixtapeView.render();

  // var songView = new mixtape.SongView({
  //  model: song,
  //  el: $(".song")
  // });

  // songView.render();

});







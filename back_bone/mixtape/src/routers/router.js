var mixtape = mixtape || {};

mixtape.Router = Backbone.Router.extend({
  routers: {
    'songs/:id' : 'showSong',
    '*other' : 'showSongList'
  },

  showSong: function(id){
    console.log("showSong", id);

    var song = mixtape.songList.get(cid);
    var view = new mixtape.SongLyricsView({model: song});
    view.render();
  },

  showSongList: function(){
    console.log("showSongList");
  }
});
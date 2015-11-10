var mixtape = mixtape || {};

mixtape.MixtapeView = Backbone.View.extend({
  el: $('.mixtape'),

  events: {
    "click .add-song": "onAddSong"  
  },

  initialize: function(songList) {
    this.songList = songList;
    this.listenTo(this.songList, "update", this.render);
    this.render();
  },

  render: function() {
    this.$('.song-list').empty();

    // _(this.songList).each(function(song){
    //   var view = new mixtape.SongView({
    //     model: song
    //   });
    //   view.render();
    //   this.$("song-list").prepend(view.el);
    // }, this);

    for (var i = 0; i < this.songList.length; i++) {
      var song = this.songList.at(i);
      var view = new mixtape.SongView({
        model: song
      });
      view.render();
      this.$(".song-list").prepend(view.el);

      // newParagraph = $("<p> blah </p>");
      // $(".essay").append(newParagraph);
    }
  },

  onAddSong: function() {
    console.log("onAddSong");
    this.songList.add({name: "", artist: ""});
  }
});

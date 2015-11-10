var mixtape = mixtape || {};

mixtape.SongList = Backbone.Collection.extend({
  model: mixtape.Song,

  initialize: function() {
    this.on("all", function(event){
      console.log("list", event);
    });
  }
});

// ensure that mixtape namespace is set up
var mixtape = mixtape || {};

mixtape.Song = Backbone.Model.extend({
  // extra functions, definitions, for Song

  initialize: function() {
    this.on("all", function(event){
      console.log("song", event);
    });
  }
});
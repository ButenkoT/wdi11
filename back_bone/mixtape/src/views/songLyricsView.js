var mixtape = mixtape || {};

mixtape.SongLyricsView = Backbone.View.extend({

  template: _.template( $("#song-lyrics-template").html() ),

  el: $(".song-lyrics"),

  render: function() {

    var templateResult = this.template(
      this.model.attributes
    );

    this.$el.html(templateResult);
  }
});
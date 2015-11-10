var mixtape = mixtape || {};

mixtape.SongView = Backbone.View.extend({
  // fetch our song template out of the HTML and
  // prepare it for use
  template: _.template( $("#song-template").html() ),

  className: "song",

  events: {
    "click .save-song": "onSave",
    "click .viewing": "onEdit",
    "click .remove-song": "onRemoveSong"
  },

  initialize: function() {
    // listen to the model. when it changes,
    // redraw the screen
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    // render the song template using the data
    // from the model
    var templateResult = this.template(
      this.model.attributes
    );

    this.$el.html(templateResult);

    if (this.model.get('artist') === "" &&
        this.model.get('name') === "") {
      this.$el.addClass("mode-editing");
    }
  },

  onSave: function(clickEvent) {

    var name = this.$(".name-input").val();
    var artist = this.$(".artist-input").val();

    this.model.set({name: name, artist: artist});

    this.$el.removeClass("mode-editing");
  },

  onEdit: function() {
    this.$el.addClass("mode-editing");
    this.$(".name-input").focus();
  },

  onRemoveSong: function(){
    this.model.destroy();
  }
});
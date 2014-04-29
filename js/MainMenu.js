/* jshint browser:true */
/* global game,$ */

window.game.mainMenu = {

  $el: $('#main-menu'),

  begin: function() {
    this.$el.show();
    $('#new-game-button').focus();
  },

  newGame: function(e, self) {
    self.$el.hide();
    game.newGame.$el.show();
    $('#begin').focus();
  }

};

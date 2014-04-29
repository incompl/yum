/* jshint browser:true */
/* global game,_,rivets */

window.game = {

  start: function() {

    // Initialize controllers
    _(game).forEach(function(o) {
      if (o.$el !== undefined) {
        rivets.bind(o.$el, o);
      }
    });

    // Kick off main menu
    game.mainMenu.begin();

  }

};

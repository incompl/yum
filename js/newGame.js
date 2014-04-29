/* jshint browser:true */
/* global $,_ */

window.game.newGame = {

  $el: $('#new-game'),

  name: _.sample(['Greg']) +
        ' ' +
        _.sample(['Smith']),

  begin: function(e, self) {
    e.preventDefault();
    self.$el.hide();
    $('#market').show();
    $('#status').show();
  }

};

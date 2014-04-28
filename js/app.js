/* jshint browser:true */
/* global $,_,rivets */

var mainMenu = {
  title: 'Yum!',

  start: function(e) {
    console.log('hi');
  }

};

rivets.bind($('#main-menu'), mainMenu);

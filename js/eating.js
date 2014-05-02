/* jshint browser:true */
/* global game,$ */

window.game.eating = {

  $el: $('#eating'),

  menu: null,
  currentDish: null,

  start: function() {
    game.eating.menu = game.kitchen.menu;
    game.eating.currentDish = game.eating.menu[0];
    game.eating.next();
  },

  next: function() {

    var sweet = 0;
    var savory = 0;
    var sour = 0;
    var bitter = 0;
    var salty = 0;
    var fatty = 0;

    game.eating.currentDish.ingredients.forEach(function(ingredient) {
      sweet  += ingredient.sweet;
      savory += ingredient.savory;
      sour   += ingredient.sour;
      bitter += ingredient.bitter;
      salty  += ingredient.salty;
      fatty  += ingredient.fatty;
    });

    // The magic!
    sweet  -= savory;
    savory -= sweet;

    bitter -= sour;
    sour -= bitter;
    salty -= bitter;
    fatty -= sour;

    sweet  += sour;
    sweet  += bitter;
    savory += salty;
    savory += fatty;

    console.log(savory);
    console.log(sweet);
    console.log(sour);
    console.log(bitter);
    console.log(salty);
    console.log(fatty);

  }

};

/* jshint browser:true */
/* global $ */

window.game.status = {

  $el: $('#status'),

  inventory: {
    ingredientsPounds: 0,
    ingredients: [],
    foodPounds: 0,
    dishes: [],
    poundsNeeded: 25
  },

  status: {
    happiness: 100,
    daysLeft: 10
  }

};

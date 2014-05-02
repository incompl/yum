/* jshint browser:true */
/* global game,$,_ */

window.game.kitchen = {

  $el: $('#kitchen'),

  techniques: [
    {
      name: 'Raw',
      dishName: 'Raw',
      ingredients: 1,
      special: ''
    },
    {
      name: 'Grilled',
      dishName: 'Grilled',
      ingredients: 2,
      special: 'double savory'
    },
    {
      name: 'Ice Cream',
      dishName: 'Ice Cream of',
      ingredients: 2,
      special: 'double sweet'
    },
    {
      name: 'Soup',
      dishName: 'Soup of',
      ingredients: 2,
      special: 'double sour'
    },
    {
      name: 'Baked',
      dishName: 'Baked',
      ingredients: 2,
      special: 'double bitter'
    },
    {
      name: 'Saut&eacute;ed',
      dishName: 'Saut&eacute;ed',
      ingredients: 2,
      special: 'double salty'
    },
    {
      name: 'Burger',
      dishName: 'Burger with',
      ingredients: 2,
      special: 'double fatty'
    },
    {
      name: 'Casserole',
      dishName: 'Casserole of',
      ingredients: 3,
      special: ''
    }
  ],

  ingredients: [],
  menu: [{name: 'Nothing yet'}],
  currentTechnique: '',
  ingredientsNeeded: 0,
  furtherIngredientsNeeded: 0,

  setup: function() {
    game.kitchen.ingredients = _.clone(game.status.inventory.ingredients);
    game.kitchen.updateIngredients();
  },

  updateTechnique: function(e) {

    // Get data for selected technique
    var techniqueName = $(e.target).attr('data-technique');
    var technique = _(game.kitchen.techniques).where({
      name: techniqueName
    })[0];
    game.kitchen.currentTechnique = technique.name;
    game.kitchen.ingredientsNeeded = technique.ingredients;

    // Remove prompt to choose technique
    $('#ingredient-not-yet').hide();
    $('#choose-ingredients').show();

    game.kitchen.updateIngredients();
  },

  // For each ingredient picker,
  // disable ingredients used in a previous picker
  updateIngredients: function() {

    var $button = $('#cook');
    var result = '';
    var numChecked = $('.chosen-ingredient:checked').length;
    var numNeeded = game.kitchen.ingredientsNeeded - numChecked;

    $button.prop('disabled', true);

    if (numNeeded === game.kitchen.ingredientsNeeded) {
      if (numNeeded === 1) {
        result = 'Choose an ingredient.';
      }
      else {
        result = 'Choose ' + numNeeded + ' ingredients.';
      }
    }
    else if (numNeeded > 0) {
      if (numNeeded === 1) {
        result = 'Choose 1 more ingredient.';
      }
      else {
        result = 'Choose ' + numNeeded + ' more ingredients.';
      }
    }
    else if (numNeeded === 0) {
      result = 'You\'re good to go!';
      $button.prop('disabled', false);
    }
    else {
      result = 'You\'ve selected ' + Math.abs(numNeeded) +
               ' too many ingredients.';
    }

    game.kitchen.furtherIngredientsNeeded = result;

  },

  cook: function() {

    var ingredients = [];

    $('.chosen-ingredient:checked').each(function() {
      var id = Number($(this).attr('data-id'));
      var ingredient = _(game.kitchen.ingredients).where({
        id: id
      })[0];

      ingredients.push(ingredient);
    });

    ingredients.forEach(function(ingredient) {
      game.kitchen.ingredients =
          _(game.kitchen.ingredients).without(ingredient);
    });

    var technique = $('.technique:checked').attr('data-technique');

    var dish = {
      name: technique + ' of ' + _(ingredients).pluck('name').join(' and '),
      ingredients: ingredients,
      technique: technique
    };

    if (game.kitchen.menu[0].name === 'Nothing yet') {
      game.kitchen.menu.pop();
    }

    game.kitchen.updateIngredients();

    game.kitchen.menu.push(dish);

    if (game.kitchen.ingredients.length < 1) {
      $('#cookin').hide();
      $('#kitchen-confirm').show();
    }
  }

};

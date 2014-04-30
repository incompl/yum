/* jshint browser:true */
/* global game,$,_ */

window.game.kitchen = {

  $el: $('#kitchen'),

  techniques: [
    {
      name: 'Raw',
      ingredients: 1,
      special: ''
    },
    {
      name: 'Grilled',
      ingredients: 2,
      special: 'double savory'
    },
    {
      name: 'Ice Cream',
      ingredients: 2,
      special: 'double sweet'
    },
    {
      name: 'Soup',
      ingredients: 2,
      special: 'double sour'
    },
    {
      name: 'Baked',
      ingredients: 2,
      special: 'double bitter'
    },
    {
      name: 'Saut&eacute;ed',
      ingredients: 2,
      special: 'double salty'
    },
    {
      name: 'Burger',
      ingredients: 2,
      special: 'double fatty'
    },
    {
      name: 'Casserole',
      ingredients: 3,
      special: ''
    }
  ],

  ingredients: [],

  setup: function() {
    game.kitchen.ingredients = game.status.inventory.ingredients;
    game.kitchen.updateIngredients();
  },

  updateTechnique: function(e) {

    // Get data for selected technique
    var techniqueName = $(e.target).attr('data-technique');
    var technique = _(game.kitchen.techniques).where({
      name: techniqueName
    })[0];

    // Remove prompt to choose technique
    $('#ingredient-not-yet').hide();

    // Only show dropdowns for the number of ingredients
    // that this technique needs
    $('.ingredient').hide();
    $('#ingredient1').show();
    if (technique.ingredients >= 2) {
      $('#ingredient2').show();
    }
    if (technique.ingredients >= 3) {
      $('#ingredient3').show();
    }

    game.kitchen.updateIngredients();
  },

  // For each ingredient picker,
  // disable ingredients used in a previous picker
  updateIngredients: function() {

    // Start by enabling everything
    $('.ingredient').find('option').prop('disabled', false);

    // Disable ingredient 1 in dropdowns 2 and 3
    var ingredient1 = $('#ingredient1').find('option:selected').val();
    $('#ingredient2, #ingredient3')
    .find('[value="' + ingredient1 + '"]')
    .prop('disabled', true);

    // Disable ingredient 2 in dropdown 3
    var ingredient2 = $('#ingredient2').find('option:selected').val();
    $('#ingredient3')
    .find('[value="' + ingredient2 + '"]')
    .prop('disabled', true);

    // If a disabled option is selected, change to another option
    $('#ingredient2, #ingredient3').each(function() {
      var $selected = $(this).find('option:selected');
      if ($selected.prop('disabled')) {
        $selected.prop('selected', false);
      }
    });

  },

  cook: function() {

  }

};

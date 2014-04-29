/* jshint browser:true */
/* global game,$,_ */

window.game.market = (function() {

  var currentShop = 0;

  function generateId() {
    return Math.round(Math.random() * 1000000);
  }

  function generateIngredient() {
    return generateMeat();
  }

  function generateShopProducts() {
    var result = [];
    for (var i = 0; i < 3; i++) {
      result.push(generateIngredient());
    }
    return result;
  }

  function generateMeat() {
    return {
      id: generateId(),
      name: _.sample(['Red', 'Black', 'White']) +
            ' ' +
            _.sample(['Cow', 'Sheep', 'Goat']) +
            ' Meat',
      sweet: 0,
      sour: _.sample(_.range(0, 2)),
      salty: _.sample(_.range(0, 4)),
      bitter: _.sample(_.range(0, 2)),
      savory: _.sample(_.range(4, 10)),
      fatty: _.sample(_.range(1, 10))
    };
  }

  function nextShop() {
    currentShop++;
    var temp = game.market.shop;
    game.market.shop = game.market.shop2;
    game.market.shop2 = game.market.shop3;
    game.market.shop3 = temp;
    if (currentShop === 3) {
      currentShop = 0;
      $('#market').hide();
      $('#kitchen').show();
    }
  }

  return {

    $el: $('#market'),

    shop: generateShopProducts(),
    shop2: generateShopProducts(),
    shop3: generateShopProducts(),

    take: function(e) {
      var id = Number($(e.target).attr('data-id'));
      var ingredient = _(game.market.shop).where({
        id: id
      })[0];
      game.status.inventory.ingredients.push(ingredient);
      game.status.inventory.ingredientsPounds += 5;
      nextShop();
    }

  };

})();

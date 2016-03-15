var assert = require('assert');
var fruition = require('../fruition.js');

describe("For the fruition project, ", function() {

  it('I should list the shops', function() {
    var result = fruition.listShops();
    assert.deepEqual(result, ["woolingsworth", "chockers", "picklepay", "shopwrong", "kwakspar"]);
  });

  it('I should list the fruit', function() {
    var result = fruition.listFruit();
    assert.deepEqual(result, ["apples", "bananas", "oranges"]);
  });

  it('I should list the prices of oranges', function() {
    var result = fruition.orangePricesList();
    assert.deepEqual(result, [12, 4, 7, 9]);
  });

  it('I should find the shop that sells the cheapest orange', function() {
    var result = fruition.cheapestOrange();
    assert.deepEqual(result, 'chockers');
  });

  it('I should return the shops that stock apples and their prices, in ascending and then descending order', function() {
    var result = fruition.applesOrder();
    assert.deepEqual(result,
      [ { shopName: 'shopwrong', price: 2 },
  { shopName: 'woolingsworth', price: 4 },
  { shopName: 'kwakspar', price: 4 },
  { shopName: 'chockers', price: 5 } ]); [{ shopName: 'chockers', price: 5 },
  { shopName: 'woolingsworth', price: 4 },
  { shopName: 'kwakspar', price: 4 },
  { shopName: 'shopwrong', price: 2 }]

  });

  it('I should find all the shop that sell oranges', function() {
    var result = fruition.allOranges();
    assert.deepEqual(result, ['woolingsworth', 'chockers', 'picklepay', 'kwakspar']);
  });
});

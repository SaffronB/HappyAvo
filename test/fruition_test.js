var assert = require('assert');
var fruition = require('../fruition.js');

describe("For the fruition project, ", function() {

  it('I should list the shops', function() {
  var result = fruition.listShops();
  assert.deepEqual(result, ["woolingsworth", "chockers", "picklepay", "shopwrong", "kwakspar"]);
  });

  it('I should list the fruit', function() {
  var result = fruition.listFruit();
  assert.deepEqual(result, ["apples", "bananas", "oranges" ]);
  });

  it('I should list the prices of oranges', function() {
  var result = fruition.orangePricesList();
  assert.deepEqual(result,[12,4,7,9]);
  });

  it('I should find the shop that sells the cheapest orange', function() {
  var result = fruition.cheapestOrange();
  assert.deepEqual(result, 'chockers');
  });

  // it('I should return the shops that stock apples and their prices, in an ascending order', function() {
  // var result = fruition.applesAscending();
  // assert.deepEqual(result, 'shopwrong: 2', 'kwakspar: 4', 'woolingsworth: 4', 'chockers: 5');
  // });

});

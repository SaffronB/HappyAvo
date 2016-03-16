var assert = require('assert');
var fruition = require('../fruition.js');

describe("For the fruition project, ", function() {

  it('I should list the shops', function() {
    var result = fruition.listShops({"woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},"chockers": {
        "bananas": 2,"apples": 5,"oranges": 4},"picklepay": {"bananas": 4,"oranges": 7},"shopwrong": {"apples": 2,
        "bananas": 3},  "kwakspar": {"oranges": 9,"apples": 4}});

    assert.deepEqual(result, ["woolingsworth", "chockers", "picklepay", "shopwrong", "kwakspar"]);
  });

  it('I should list the fruit', function() {
    var result = fruition.listFruit({"woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},"chockers": {
        "bananas": 2,"apples": 5,"oranges": 4},"picklepay": {"bananas": 4,"oranges": 7},"shopwrong": {"apples": 2,
        "bananas": 3},  "kwakspar": {"oranges": 9,"apples": 4}});

    assert.deepEqual(result, ["apples", "bananas", "oranges"]);
  });

  it('I should list the prices of oranges', function() {
    var result = fruition.orangePricesList({"woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},"chockers": {
        "bananas": 2,"apples": 5,"oranges": 4},"picklepay": {"bananas": 4,"oranges": 7},"shopwrong": {"apples": 2,
        "bananas": 3},  "kwakspar": {"oranges": 9,"apples": 4}});
    assert.deepEqual(result, [12, 4, 7, 9]);
  });

  it('I should find the shop that sells the cheapest orange', function() {
    var result = fruition.cheapestOrange({"woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},"chockers": {
        "bananas": 2,"apples": 5,"oranges": 4},"picklepay": {"bananas": 4,"oranges": 7},"shopwrong": {"apples": 2,
        "bananas": 3},  "kwakspar": {"oranges": 9,"apples": 4}});

    assert.equal(result, 'chockers');
  });

  it('I should return the shops that stock apples and their prices, in ascending and then descending order', function() {
    var result = fruition.applesOrder({"woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},"chockers": {
        "bananas": 2,"apples": 5,"oranges": 4},"picklepay": {"bananas": 4,"oranges": 7},"shopwrong": {"apples": 2,
        "bananas": 3},  "kwakspar": {"oranges": 9,"apples": 4}});

    assert.deepEqual(result, {ascending: [[{shopName: 'shopwrong', price: 2}, {shopName: 'woolingsworth',price: 4}, {shopName: 'kwakspar',
      price: 4}, {shopName: 'chockers',price: 5}]], descending:[[{shopName: 'chockers',price: 5}, {shopName: 'woolingsworth',price: 4}, {shopName: 'kwakspar',price: 4}, {shopName: 'shopwrong',
      price: 2}]]});
  });

  it('I should find all the shop that sell oranges', function() {
    var result = fruition.allOranges({"woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},"chockers": {
        "bananas": 2,"apples": 5,"oranges": 4},"picklepay": {"bananas": 4,"oranges": 7},"shopwrong": {"apples": 2,
        "bananas": 3},  "kwakspar": {"oranges": 9,"apples": 4}});

    assert.deepEqual(result, ['woolingsworth', 'chockers', 'picklepay', 'kwakspar']);
  });
});

it('I should find the cheapest price of all the fruit', function() {
  var result = fruition.cheapestPrice({"woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},"chockers": {
      "bananas": 2,"apples": 5,"oranges": 4},"picklepay": {"bananas": 4,"oranges": 7},"shopwrong": {"apples": 2,
      "bananas": 3},  "kwakspar": {"oranges": 9,"apples": 4}});

  assert.deepEqual(result, 2);
});
it('I should find the cheapest fruit and fruit seller', function() {
  var result = fruition.cheapestFruit({"woolingsworth": {"apples": 4,"bananas": 3,"oranges": 12},"chockers": {
      "bananas": 2,"apples": 5,"oranges": 4},"picklepay": {"bananas": 4,"oranges": 7},"shopwrong": {"apples": 2,
      "bananas": 3},  "kwakspar": {"oranges": 9,"apples": 4}});

  assert.deepEqual(result, [{'chockers': 'bananas'}, {'shopwrong': 'apples'}]);
});

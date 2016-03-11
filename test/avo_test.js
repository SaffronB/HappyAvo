var assert = require("assert");
var avo = require('../avo');

describe("For the bestdeal kata,", function() {

  it('I should specify the different deals', function() {

    var result = avo.avoDeals('1 for R3, 2 for R7, 3 for R10, 5 for R14.50');
    assert.deepEqual(result, ['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']);

  });

  it('I should calculate the price per avo for each deal', function() {
    var result = avo.avoPrices(['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']);
    assert.deepEqual(result, [3.00, 3.50, 3.33, 2.90]);

  });


  it('I should create a price deal map', function() {

    var result = avo.priceDealMap(['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']);
    assert.deepEqual(result, {
      '3.00': '1 for R3',
      '3.50': '2 for R7',
      '3.33': '3 for R10',
      '2.90': '5 for R14.50'
    });

  });

  it('I should get the cheapest deal', function() {

    var result = avo.cheapest(['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']);
    assert.equal(result, '5 for R14.50');

  });


});

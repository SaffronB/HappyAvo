var assert = require("assert");
var whatever = require('../whatever');

describe("For the bestdeal kata,", function() {

  it('I should specify the different deals', function() {

    var result = whatever.avoDeals('1 for R3, 2 for R7, 3 for R10, 5 for R14.50');
    assert.deepEqual(result, ['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']);

  });

  it('I should calculate the price per avo for each deal', function() {
    var result = whatever.avoPrices(['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']);

    assert.deepEqual(result, [3, 3.50, 3.33, 2.90]);

  });

  it('I should get the cheapest deal', function() {

    var result = whatever.cheapest([3, 3.50, 3.33, 2.90]);
    assert.deepEqual(result, '5 for R14.50');

  });

  it('I should create a price deal map', function() {

    var result = whatever.priceDealMap(['1 for R3', '2 for R7', '3 for R10', '5 for R14.50']);
    assert.equal(result, {
      '3' : '1 for R3',
      '3.50' : '2 for R7',
      '3.33' : '3 for R10',
      '2.90' : '5 for R14.50'
    });

  });


  //
  //  });
  //
  // it ('I should find the cheapest deal', function(){
  //
  // });

});

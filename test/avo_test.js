var assert = require("assert");
var avo = require('../avo');

describe("For the bestdeal kata,", function() {

  it('I should create a price array', function() {

    var result = avo.avoArray('1 for R3, 2 for R7, 3 for R10, 5 for R14.50');
    assert.deepEqual(result, [1, 3, 2, 7, 3, 10, 5, 14.50]);

  });

  it('I should calculate the price per avo for each deal', function() {
    var result = avo.calculate([1, 3, 2, 7, 3, 10, 5, 14.50]);
    assert.deepEqual(result, [3, 3.50, 3.33, 2.90])

  });

 it ('I should find the cheapest deal', function(){
   var result = avo.cheapest([3, 3.50, 3.33, 2.90]);
   assert.deepEqual(result, [2.90])

 });

});

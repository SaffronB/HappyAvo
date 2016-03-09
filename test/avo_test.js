var assert = require("assert");
var avo = require('../avo');

describe("produce an array", function() {

  it('from a string', function() {

    var result = avo('1 for R3, 2 for R7, 3 for R10, 5 for R14.50');
    assert.deepEqual(result, [1, 3, 2, 7, 3, 10, 5, 14.50]);


  });


});

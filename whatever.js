exports.avoDeals = function(string) {
  var avoDealsArray = string.split(", ");
  return (o)
};

var avoPrices = function(avoDealsArray) {
  var prices = [];
  var avoDealsArray = ['1 for R3', '2 for R7', '3 for R10', '5 for R14.50'];
  for (var i = 0; i < avoDealsArray.length; i++) {
    var deal = avoDealsArray[i];
    var avoPriceArray = deal.split("for R");
    var divideIndex = (avoPriceArray[1] / avoPriceArray[0]).toFixed(2);
    prices.push(divideIndex);
  }
  return (prices);

};

exports.avoPrices = avoPrices;

exports.cheapest = function(avoPrices) {

    var cheapestPrice = Math.min.apply(null, avoPrices);
    return cheapestPrice;
    //Array.prototype.map.call(string, function(cheapestPrice)
    //return
};

exports.priceDealMap = function(avoDeals) {
var avoDeals = ['1 for R3', '2 for R7', '3 for R10', '5 for R14.50'];
var avoPrices = [3, 3.50, 3.33, 2.90];

avoDeals[0]=avoPrices[0]
}


// return avoPrices[0];
// return avoPrices[1];
// return avoPrices[2];
// return avoPrices[3];










    //
    // //loop through the deals
    // //find the price for each deal
    // //map the price to a deal
    //
    // var deals = {
    //
    // };
    //
    //
    // {
    //   2 : "deal 1",
    //   4 : "deal 7"

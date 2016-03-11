exports.avoDeals = function(string) {
  var avoDealsArray = string.split(", ");
  return avoDealsArray;
};

exports.avoPrices = function(avoDealsArray) {
  var prices = [];
  for (var i = 0; i < avoDealsArray.length; i++) {
    var deal = avoDealsArray[i];
    var avoPriceArray = deal.split("for R");
    var divideIndex = (avoPriceArray[1] / avoPriceArray[0]).toFixed(2);
    prices.push(divideIndex);
  }
  return prices;

};

exports.priceDealMap = function(avoDeals) {
  var avoPrices = exports.avoPrices;

  var avoPricesArray = avoPrices(avoDeals);

  var priceMap = {};
  for (var i = 0; i < avoDeals.length; i++) {
    var price = avoPricesArray[i];
    var deal = avoDeals[i];
    priceMap[price] = deal;
  }

  return priceMap;
};


exports.cheapest = function(avoDeals) {
  var priceDealMap = exports.priceDealMap;
  var avoPrices = exports.avoPrices;
  var avoPricesArray = avoPrices(avoDeals);
  var priceMap = priceDealMap(avoDeals);
  var cheapestPrice = Math.min.apply(null, avoPricesArray).toFixed(2);
  return priceMap[cheapestPrice];

};

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
  var prices = avoPrices(avoDeals);

  var priceMap = {};
  for (var i = 0; i < avoDeals.length; i++) {
    var price = prices[i];
    var deal = avoDeals[i];
    priceMap[price] = deal;
  }

  return priceMap;
};


exports.cheapest = function(avoDeals) {
  var priceDealMap = exports.priceDealMap;
  var avoPrices = exports.avoPrices;
  var prices = avoPrices(avoDeals);
  var priceMap = priceDealMap(avoDeals);
  var cheapestDeal = Math.min.apply(null, prices).toFixed(2);
  return priceMap[cheapestDeal];

};

exports.expensive = function(avoDeals) {
  var priceDealMap = exports.priceDealMap;
  var avoPrices = exports.avoPrices;
  var prices = avoPrices(avoDeals);
  var priceMap = priceDealMap(avoDeals);
  var expensiveDeal = Math.max.apply(null, prices).toFixed(2);
  return priceMap[expensiveDeal];

};

exports.average = function(avoDeals) {

  // var avoPrices = exports.avoPrices;
  // var prices = avoPrices(avoDeals);
  var sumOfPrices = 0;

  for (i = 0; i < avoDeals.length; i++) {
    sumOfPrices += avoDeals[i];
  }

  var average = sumOfPrices / avoDeals.length;
  var averagePrice = 'R' + (average).toFixed(2);

  // averagePrice.push(sumOfPrices);

  return averagePrice;

};

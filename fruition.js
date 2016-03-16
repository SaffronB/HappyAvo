exports.listShops = function(content) {
  var shopArray = [];
  for (var shop in content) {
    shopArray.push(shop);
  }
  return (shopArray);
};

exports.listFruit = function(content) {
  var initialFruitArray = [];
  var fruitArray = [];
  for (var shop in content) {
    for (var fruit in content[shop]) {
      initialFruitArray.push(fruit);
    }
    for (i = 0; i < initialFruitArray.length; i++) {
      if (fruitArray.indexOf(initialFruitArray[i]) == -1) {
        fruitArray.push(initialFruitArray[i]);
      }
    }
  }
  return (fruitArray);
};

exports.orangePricesList = function(data) {
  var orangePrices = [];
  for (var shop in data) {
    if (data[shop]['oranges']) {
      orangePrices.push(data[shop]['oranges']);
    }
  }
  return (orangePrices);
};

exports.cheapestOrange = function(content) {

  var orangePricesList = exports.orangePricesList;

  var prices = orangePricesList(content);

  var cheapestPrice = Math.min.apply(null, prices);
  var cheapestShop = '';


  for (var shop in content) {

    if (content[shop]["oranges"]) {
      if (content[shop]["oranges"] == cheapestPrice) {
        cheapestShop = shop;

      }
    }
  }
  return cheapestShop;
};

exports.applesOrder = function(content) {

  var appleArrayAscending = [];
  var appleArrayDescending = [];
  var applePricing = {};
  applePricing = {
    ascending: [],
    descending: [],
  }

  for (var shop in content) {
    for (var fruit in content[shop]) {
      if (fruit === 'apples') {
        var appleObject = {};
        appleObject = {
          shopName: shop,
          price: content[shop][fruit]
        }
        appleArrayAscending.push(appleObject);
        appleArrayDescending.push(appleObject);
      }
    }
  };

  function compare(a, b) {
    return a.price > b.price;
  }

  function comparecompare(a, b) {
    return b.price > a.price;
  }

  appleArrayAscending.sort(compare);
  applePricing.ascending.push(appleArrayAscending);
  appleArrayDescending.sort(comparecompare);
  applePricing.descending.push(appleArrayDescending);

  return applePricing;
};

exports.allOranges = function(content) {
  var orangeShops = [];
  for (var shop in content) {
    if (content[shop]['oranges']) {
      orangeShops.push(shop);
    }
  }
  return orangeShops;
};

exports.cheapestPrice = function(content) {
  var fruitPrices = [];
  var cheapestP;

  for (var shop in content) {
    for (var fruit in content[shop]) {
      fruitPrices.push(content[shop][fruit]);
    }
  }

  for (var i = 0; i < fruitPrices.length; i++) {
    if (typeof cheapestP == 'undefined') {
      cheapestP = fruitPrices[i];
    } else {
      if (fruitPrices[i] < cheapestP) cheapestP = fruitPrices[i];
    }
  }

  return cheapestP;
};

exports.cheapestFruit = function(content) {

  var cheapestPriceNumber = exports.cheapestPrice(content);
  var cheapestFruits = [];
  for (var shop in content) {
    for (var fruit in content[shop]) {
      if (content[shop][fruit] === cheapestPriceNumber) {
        var shopFruitObject = {};
        shopFruitObject[shop] = fruit;
        cheapestFruits.push(shopFruitObject);
      }
    }
  }
  return cheapestFruits;
};

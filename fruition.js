var content = {
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "picklepay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }

};

exports.listShops = function() {
  var shopArray = [];
  for (var shop in content) {
    shopArray.push(shop);
  }
  return (shopArray);
};

exports.listFruit = function() {
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

exports.orangePricesList = function() {
  var orangePrices = [];
  for (var shop in content) {
    if (content[shop]['oranges']) {
      orangePrices.push(content[shop]['oranges']);
    }
  }
  return (orangePrices);
};

exports.cheapestOrange = function() {
  var orangePricesList = exports.orangePricesList;
  var prices = orangePricesList();

  var cheapestPrice = Math.min.apply(null, prices);

  var cheapestShop = '';

  for (var shop in content) {
    if (content[shop]['oranges']) {
      if (content[shop]['oranges'] == cheapestPrice) {
        cheapestShop = shop;
        break;
      }
    }
  }

  return cheapestShop;
};
exports.cheapestOrange();





exports.applesOrder = function() {

var appleArrayAscending = [];
var appleArrayDescending =[];

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
function compare(a,b) {
  return a.price > b.price;
}
function comparecompare (a, b){
  return b.price > a.price;
}


appleArrayAscending.sort(compare);
appleArrayDescending.sort (comparecompare);
return appleArrayAscending;
return appleArrayDescending
}

exports.allOranges = function() {
var orangeShops = [];
for (var shop in content) {
  if (content[shop]['oranges']) {
    orangeShops.push(shop);
  }


}
return orangeShops;
}

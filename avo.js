//convert the string into an array (split out the quantity and the price);
exports.avoArray = function(string) {
  var array = string.split(" for R").join();
  var secondArray = array.split(",");
  for (var i = 0; i < array.length; i++) {}
  return (secondArray)


};

//take an array as an input and calculate the Price Per Avo for each deal (make sure you use just two decimal points);
exports.calculate = function(arrayarray) {
  var priceArray = [];

  var price1 = (arrayarray[1] / arrayarray[0]).toFixed(2);
  var price2 = (arrayarray[3] / arrayarray[2]).toFixed(2);
  var price3 = (arrayarray[5] / arrayarray[4]).toFixed(2);
  var price4 = (arrayarray[7] / arrayarray[6]).toFixed(2);

  priceArray.push(price1, price2, price3, price4);

  return (priceArray);


}
//find the cheapest deal;

exports.cheapest = function (){


  Math.min.apply (null, priceArray);

  return (bestDeal);

}

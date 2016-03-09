//convert the string into an array (split out the quantity and the price);
module.exports = function(string) {
  var array = string.split(" for R").join();
  var secondArray = array.split(",");
  for (var i = 0; i < array.length; i++) {}
  return (secondArray)

};

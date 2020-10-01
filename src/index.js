
exports.min = function min (array) {
  if (array != undefined && array.length > 0) {
  var len = array.length, min = Infinity;
  while (len--) {
    if (array[len] < min) {
      min = array[len];
    }
  }

  return min;
  
}
else {return 0;}
}

exports.max = function max (array) {
  if (array != undefined && array.length > 0) {
  var len = array.length, max = -Infinity;
  while (len--) {
    if (array[len] > max) {
      max = array[len];
    }
  }
  return max;}
  else {return 0;}
}

exports.avg = function avg (array) {
  
  if (array != undefined && array.length > 0) {
     return array.reduce((a,b) => (a + b)) /array.length;
    }
  else {return 0;}
  
  }
 
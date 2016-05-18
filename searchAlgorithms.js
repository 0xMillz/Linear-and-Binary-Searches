Array.prototype.linearSearch = function(val){

  for (var i = 0 ; i < this.length; i++) {
    if (this[i] === val)
      return i;
  }
  return -1;
};

Array.prototype.binarySearch = function(val){
  var min = 0;
  var max = this.length -1;
  var currentIndex;
  var currentElement;

  while (min <= max) {
    currentIndex = Math.floor((min +max) / 2);
    currentElement = this[currentIndex];

    if (currentElement > val) {
      max = currentIndex -1;
    }
    else if (currentElement < val) {
      min = currentIndex + 1;
    }
    else {
      return currentIndex;
    }
  }

  return -1;
};

module.exports = { Array };
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  var newestIndex = 0;
  var oldestIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    newestIndex++;
    storage[newestIndex] = value;
  };

  someInstance.dequeue = function() {
    if(newestIndex !== oldestIndex) {
      oldestIndex++;
      var returnItem = storage[oldestIndex];
      delete storage[oldestIndex];

      return returnItem;
    }
    
  };

  someInstance.size = function() {

    return newestIndex - oldestIndex;
  };

  return someInstance;
};

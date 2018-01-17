var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var newOrder = 0;
    var dequeued = storage[0];
    delete storage[0];
    count--;
    for (var key in storage) {
      storage[newOrder] = storage[key];
      delete storage[key];
      newOrder++
    }
    return dequeued;
  };

  someInstance.size = function() {
    var size = Object.keys(storage);
    return size.length;
  };

  return someInstance;
};

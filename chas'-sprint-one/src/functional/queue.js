var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
<<<<<<< HEAD:chas'-sprint-one/src/functional/queue.js
  
  var newestIndex = 0;
  var oldestIndex = 0;
=======
  var count = 0;
>>>>>>> c546ec7549b277d91379f2ce253c9c90b49a5811:sprint-one/src/functional/queue.js

  // Implement the methods below

  someInstance.enqueue = function(value) {
<<<<<<< HEAD:chas'-sprint-one/src/functional/queue.js
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
=======
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
>>>>>>> c546ec7549b277d91379f2ce253c9c90b49a5811:sprint-one/src/functional/queue.js
  };

  return someInstance;
};

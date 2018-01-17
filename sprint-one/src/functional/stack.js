var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    
    if(typeof value === 'string') {
      //someInstance[count] = value;
      storage[count] = value;
    }

    count++;
    
  };

  someInstance.pop = function() {
    if(count === 0) {
      return;
    }
    count--;
    var stringToReturn = storage[count];
    delete storage[count]; 
    //delete someInstance[count];
    return stringToReturn;
    
      
    
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    storage: {},
    count: 0
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.count] = value;
    return this.count++;
  },
  pop: function(value) {
    if(this.size() > 0) {
      this.count--;
      var stringToReturn = this.storage[this.count];
      
      delete this.storage[this.count];
      return stringToReturn;


      var result = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
      return result;
    }
  },
  size: function(value) {
    return this.count;
  }
};








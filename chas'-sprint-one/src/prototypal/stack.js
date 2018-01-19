var Stack = function(data) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);
  someInstance.storage =  {}; 
  someInstance.count =  0; 
  
  return someInstance;
};

var stackMethods = {

  push: function(data) {
    this.storage[this.count] = data;
    this.count++;
  },
  pop: function(data) {
    if(this.count > 0){
      this.count--;
      var stringToReturn = this.storage[this.count];
      delete this.storage[this.count];
      return stringToReturn;
    }      
  },
  size: function(data) {
    return this.count;
  }
};




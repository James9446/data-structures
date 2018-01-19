var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
  	count: 0,
	  storage: {}
  };
  _.extend(someInstance, stackMethods)
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var popped = this.storage[this.count -1];
    if (this.count !== 0) {
    	delete this.storage[this.count];
      this.count--;
    }
    return popped;
  },
  size: function() {
    return this.count;
  }
};



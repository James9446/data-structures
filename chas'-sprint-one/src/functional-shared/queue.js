var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someQueueInstance = {
    storage: {},
    index1: 0,
    index2: 0
  }
  _.extend(someQueueInstance, queueMethods);
  return someQueueInstance;
};

var queueMethods = {

  enqueue: function(value) {
    this.index1++;
    this.storage[this.index1] = value;
  },

  dequeue: function(value) {
    if(this.index1 !== this.index2) {
      this.index2++;
      var stringToReturn = this.storage[this.index2];
      delete this.storage[this.index2];
      return stringToReturn;
    }
      

  },
  size: function(value) {
    
    return this.index1 - this.index2;
  }
};



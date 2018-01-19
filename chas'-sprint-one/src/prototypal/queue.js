var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.index1 = 0;
  someInstance.index2 = 0;

  return someInstance;
};

var queueMethods = {

  enqueue: function(data) {
    this.index1++;
    this.storage[this.index1] = data;
    
  },
  dequeue: function(data) {
    if(this.index1 !== this.index2) {
      this.index2++;
      var stringToReturn = this.storage[this.index2]
      delete this.storage[this.index2];
      return stringToReturn;
    }
  },
  size: function(data) {
    return this.index1 - this.index2;
  }

};



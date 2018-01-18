var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {},
  this.index1 = 0,
  this.index2 = 0;
};

Queue.prototype.enqueue = function(data) {
  this.index1++;
  this.storage[this.index1] = data;
};

Queue.prototype.dequeue = function() {
  if(this.index1 !== this.index2) {
    this.index2++;
    var stringToReturn = this.storage[this.index2];
    delete this.storage[this.index2];
    return stringToReturn;
    
  }
};

Queue.prototype.size = function() {
  return this.index1 - this.index2;
}





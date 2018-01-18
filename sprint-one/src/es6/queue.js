class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.count = 0;
  	this.storage = {};
  }
  enqueue(value) {
  	this.storage[this.count] = value;
  	this.count++;
  }
  dequeue() {
    var newOrder = 0;
    var dequeued = this.storage[0];
    delete this.storage[0];
    this.count--;
    for (var key in this.storage) {
      this.storage[newOrder] = this.storage[key];
      delete this.storage[key];
      newOrder++
    }
    return dequeued;
  }

  size() {
    var size = Object.keys(this.storage);
    return size.length;
  }
}

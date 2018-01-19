class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, count) {
    this.storage = {},
    this.count = 0
  }

  push(data) {
    this.storage[this.count] = data;
    this.count++;
  }
  pop() {
    if(this.count > 0) {
      this.count--;
      var stringToReturn = this.storage[this.count];
      delete this.storage[this.count];
      return stringToReturn;
    }
  }
  size() {
    return this.count;
  }

}
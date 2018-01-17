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

},
dequeue: function(data) {

},
size: function(data) {
  return this.index1 - this.index2;
}




};



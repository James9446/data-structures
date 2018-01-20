

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  if ( this._storage[index] ) {
    this._storage[index].unshift([k, v]);
  } else {
    this._storage[index] = [[k, v]];
  }
  //debugger;
  var ok = "ok";

};

HashTable.prototype.retrieve = function(k) {
  // debugger;
  var fn = this;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var key;
  var isThere = true;
  var flag = false;
  
  this._storage[index].forEach(function(value) {
    // debugger;
    if (!flag) {
      if (value && value[0] === k) {
        key = fn._storage[index].indexOf(value);
        isThere = true;
        flag = true;
        // return;
      } else {
        isThere = false;
      }
    }
  });
  if (isThere) {
    return this._storage[index][key][1];
  }
};

HashTable.prototype.remove = function(k) {
  // debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var key;
  this._storage[index].forEach(function(value) {
    // debugger;
    if (value[0] === k) {
      key = value.indexOf(k);
    }
  });
  this._storage[index][key] = undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



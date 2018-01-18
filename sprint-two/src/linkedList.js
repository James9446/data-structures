var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  //storage = {};
  // var storage = {};

  list.addToTail = function(value) {
    debugger;
    if(Object.keys(list).length === 6) {
    // console.log('is empty');
    // console.log('list:', list);
      var theNode = Node(value);
      this[this.count] = theNode;
      
      list.head = this[this.count];
      // console.log('list.head:', list.head);
      // console.log('list[this[this.count]]:', this[this[this.count]]);
      list.tail = this[this.count];
    } else {
      // debugger;
      console.log('not empty');
      var lastNode = Node(value);
      this[this.count] = lastNode;
      list.tail.next = this[this.count];
      list.tail = this[this.count]; 
    }
    this.count++;
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

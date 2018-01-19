var LinkedList = function() {
  // given properties of a linked list
  var list = {};
  list.head = null;
  list.tail = null;
  //count is used as the key for nodes
  list.count = 0;

  // completity = O(1), constant
  list.addToTail = function(value) {
    // check to make sure list is empty
    if (Object.keys(list).length === 6) {
      //create a node
      var firstNode = Node(value);
      // adding node to the list
      this[this.count] = firstNode;   
      //updating the head and tail references  
      list.head = this[this.count];
      list.tail = this[this.count];
    } else {
      // if list is not empty
      // create a new node
      var lastNode = Node(value);
      // add node to the end of list
      this[this.count] = lastNode;
      // update previous last nodes reference(.next prop) to the newly created node
      list.tail.next = this[this.count];
      // update tail reference to the newly created node
      list.tail = this[this.count]; 
    }
    this.count++;
  };

  // completity = O(1), constant
  list.removeHead = function() {
    // save the value of the current first node
    var removed = this.head.value;
    // override the current 1st nodes value
    this.head.value = null;
    // utilizing current first nodes.next property to update the heads reference to the next node which is now the first node
    this.head = this.head.next;
    // return value of what was the first node
    return removed;
    
  };
  
  // completity = O(n), linear
  list.contains = function(target) {
    // traverse all nodes in the list
    for (var key in list) {
      // check if the list has a node with a value equal to the target 
      if (list[key].value === target) {
        return true;
      }
    }
    return false;
  };
  // return the list object, so we have access to our list, i.e. accessible
  return list;
};

// given constructor of a linked list
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

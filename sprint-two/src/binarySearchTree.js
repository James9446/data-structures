var BinarySearchTree = function(value) {
  // debugger;
  this.value = value;
  this.left;
  this.right;
  
};



BinarySearchTree.prototype.insert = function(value, node) {
  //debugger;
  var node = node || this;
  if (value < node.value) {
    if (node.left) {
      this.insert(value, node.left);
    } else {
      return node.left = new BinarySearchTree(value);
    }
  } else {
    if (node.right) { 
      this.insert(value, node.right);
    } else {
      return node.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value, node) {
  // divide and conquer 
  // debugger;
  var node = node || this;
  if (node.value === value) {
    return true;
  } else {
    if (node.value > value && node.left) {
      return this.contains(value, node.left);
    } else {
      if (node.right) {
        return this.contains(value, node.right);
      }
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(iterator, node) {
  var node = node || this;
  // use callback on current nodes value
  iterator(node.value); 
  // check for left node
  if (node.left) {
  // if found 
  // enter the left node and repeat depthFirstLog on (iterator, node.left)
    this.depthFirstLog(iterator, node.left);
  }     
  // check for right node
  if (node.right) {
  // if found 
    // enter the right node and repeat depthFirstLog on (iterator, node.right)
    this.depthFirstLog(iterator, node.right);
  }   
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//Advanced sorted algo
// check left for value
    // if value is there enter node
    // restart steps
  // else
    // log value of node
  // check right for value
    // if value is there enter node
  // return to parent node


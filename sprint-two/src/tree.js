var Tree = function(value) {
  
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  // console.log('contains this', this);
  var doesHave = false;
  var doesContain = function (node, target) {
    // console.log('doesContains this', this);
    // isTrue = true;
    //debugger;
    // console.log('node.value:', node.value);
    // console.log('target:', target);
    if (node.value === target) {
      // console.log('condition passed');
      return doesHave = true; 
    }
    if (node.children.length > 0) {
      node.children.forEach(function(child) {
        doesContain(child, target);
      });
      // for (var i = 0; i < node.children.length; i++) {
      //   doesContain(node.children[i], target);
      // }
    }
    
  };
  // debugger;
  doesContain(this, target);
  // if (doesHave) {
  //   return true;
  // }
  return doesHave; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

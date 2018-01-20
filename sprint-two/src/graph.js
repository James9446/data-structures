

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.count = 0;
};

// var Node = function(value) {
//   var node = {};
//   this.value = value;
//   this.edge = [];

//   return node;
// };


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  
  var Node = function(value) {
    this.value = value;
    this.edge = [];
  };
  
  var newNode = new Node(value);
  this.storage[this.count] = newNode;

  this.count++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // input is a node -> output boolean
  //traverse this.storage for the node value
  for (var key in this.storage) {
    //debugger;
    if (this.storage[key].value === node) {
      return true;
    }
  }
  return false;
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var fn = this;
  // var removeConnections = function(node, edges) {
  //   if (edges.length === 0) {
  //     return;
  //   }
    // edges.forEach(function(connection) {
    //   fn.removeEdge(node, connection);
    // });
  // };
  // removeConnections(node, node.edge);
  for (var key in this.storage) {
    if (this.storage[key].value === node) {
      // removeConnections(this.storage[key], this.storage[key].edge);
      this.storage[key].edge.forEach(function(connection) {
        fn.removeEdge(node, connection);
      });
      delete this.storage[key];
    }
  }
  // this.removeEdge()
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // debugger;
  var foundFrom;
  var foundTo;
  for (var key in this.storage) {
    if (this.storage[key].value === fromNode) {
      foundFrom = this.storage[key];
    }
    // if (this.storage[key].value === toNode) {
    //   foundTo = this.storage[key];
    // }
  }
  // foundFrom.edge.push(foundTo.value);
  // foundTo.edge.push(foundFrom.value);

  var hasEdge = false;

  foundFrom.edge.forEach(function(value) {
    // debugger;ß
    if (value === toNode) {
      hasEdge = true;
    }
  });
  return hasEdge;    
  
}; 

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var foundFrom;
  var foundTo;
  for (var key in this.storage) {
    // debugger;
    if (this.storage[key].value === fromNode) {
      foundFrom = this.storage[key];
    }
    if (this.storage[key].value === toNode) {
      foundTo = this.storage[key];
    }
  }
  foundFrom.edge.push(foundTo.value);
  foundTo.edge.push(foundFrom.value);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var foundFrom;
  var foundTo;
  var index;
  for (var key in this.storage) {
    // debugger;
    if (this.storage[key].value === fromNode) {
      foundFrom = this.storage[key];
    }
    if (this.storage[key].value === toNode) {
      foundTo = this.storage[key];
    }
  }
  foundFrom.edge.forEach(function(value, i) {
    // debugger;ß
    if (value === fromNode) {
      index = i;
    }
  });
  foundTo.edge.forEach(function(value, i) {
    // debugger;ß
    if (value === toNode) {
      index = i;
    }
  });
  
  foundFrom.edge.splice(index, 1);
  foundTo.edge.splice(index, 1);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key].value);
  }
};

// Graph.prototype.findNode = function findNode(node) {
//   for (var key in this.storage) {
//     if (this.storage[key].value === node) {
//       return this.storage[key];
//     }
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */



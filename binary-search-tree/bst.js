/* 
RESOURCES: 
javascript implementation https://www.youtube.com/watch?v=6JeuJRqKJrI&t=379s
deletion method explained https://www.youtube.com/watch?v=gcULXE7ViZw

NOTES: 
- some implementations have the recursive functions set as class methods 
- time complexity: 
AVGERAGE: O(logn) because of recursion however if unbalanced
WORST: O(n) BST could degenerate with only 1 branch - basically a linked list 
- space complexity: 
WORST: O(n)
- All recursive calls need to save the results somewhere - if they are to be returned 
e.g. deletion recursive method
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(data) {
    this.root = new Node(data);
    this.count = 1;
  }

  size = () => {
    return this.count;
  };

  min = () => {
    let curNode = this.root;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
    // declare curNode and set to root Node
    // while curNode.left
    // set curNode to curNode.left
    // return curNode data
  };
  max = () => {
    let curNode = this.root;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
    // declare curNode and set to root Node
    // while curNode.right
    // set curNode to curNode.right
    // return curNode data
  };

  contains = (val) => {
    let curNode = this.root;
    while (curNode) {
      if (val === curNode.data) return true;
      if (val < curNode.data) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    return false;

    /* NOTES
    should be checking left and right values 
    can be achieved without using any functions - just a while loops
    */
  };

  remove = (data) => {
    const node = this.root;
    if (!node) return null;

    /* 
    // recurse function used to traverse tree for target node
    // target node has 3 different usecases
        // no children (leaf node) - easiest deletion - no relink
        // 1 child 
        // 2 children 
            // requires identiyfing min value of right subTree 
            // then overwriting target node with min value
            // now two nodes with duplicate values
            // calling removeNode with the min value as the target 
            // will remove dup */

    const removeNode = (node, data) => {
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          node = null;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let min = this.min(node.right);
        node.data = min.data;
        node.right = removeNode(node.right, min.data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  };

  insert = (data) => {
    // increment count
    this.count++;
    // declare new node
    const newNode = new Node(data);

    const traverse = (node) => {
      // if data less than node value
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          traverse(node.left);
        }
      } else {
        if (!node.right) node.right = newNode;
        else traverse(node.right);
      }
      // traverse left to left node
      // if no left value
      // set new node to left
      // if data more tha node value
      // traverse right to right node
      // if no right value
      // set new node to right
      //
    };

    traverse(this.root);
  };

  // DEPTH FIRST SEARCH (DFS)
  dfsInOrder = () => {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.data);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  };

  dfsPreOrder = () => {
    const result = [];
    const traverse = (node) => {
      result.push(node.data);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  };

  dfsPostOrder = () => {
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.data);
    };
    traverse(this.root);
    return result;
  };

  // BREADTH FIRST SEARCH (BFS)
  bfs = () => {
    const result = [];
    const queue = [];

    queue.push(this.root);

    while (queue.length > 0) {
      let curNode = queue.shift();
      result.push(curNode.data);

      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    return result;
  };
}

// TEST CASES

const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);
console.log(bst.size());
console.log(bst.contains(2));
console.log(bst.contains(9));
console.log(bst.min());
console.log(bst.max());
console.log(bst.dfsInOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.bfs());
bst.remove(12);
bst.remove(36);
console.log(bst.bfs());

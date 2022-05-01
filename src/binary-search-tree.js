const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);
    let current = this.root();
    if(current === null) {
      this.rootNode = node;
      return;
    }
    while(current) {
      if(data < current.data) {
        if(current.left === null) {
          current.left = node;
          //console.log(current.left);
          return;
        }
        current = current.left;
        continue;
      } else {
        if(current.right === null) {
          current.right = node;
          //console.log(current.right);
          return;
        }
        current = current.right;
        continue;
      }
    }
  }

  has(data) {
    let result = true;
    (this.find(data) !== null) ? (result = true) : (result = false);
    return result;
  }

  find( data ) {
    if(this.root() === null) {
      return null;
    }
    let current = this.rootNode;;
    while (current) {     
          if(current.data === data) {
              return current  
          } 
          if(current.data > data){
              current = current.left;
          } else {
              current = current.right;
          }
          //console.log(current);
      }
    return null;
  }

 

  remove(data) {
    let current = this.root();
    let prev = this.root();
    if(this.has(data) === false) {
      //console.log("ook");
      return;
    }
    while(current) {
        if(data === current.data) {
          break;
        }
        prev = current;
        if(data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
    }
    if ( (current.left === null) && (current.right === null) ) {
      (data < prev.data) ? (prev.left = null) : (prev.right = null);	
      //console.log("no childs");
      return;
    }
    //console.log(current);
    //console.log(current.left);
    //console.log(current.right);
    if( (current.left === null) || (current.right === null) ) {
      if(prev.left === current) {
        //console.log("here");
        (current.left !== null) ? (prev.left = current.left) : (prev.left = current.right);
        return;
      } else {
        //console.log("here 2");
        (current.right !== null) ? (prev.right = current.right) : (prev.right = current.left);
        return;
      }
    }
   
    let curr = current.right;
    let prevCurr = current.right;
    while (curr !== null) {
      if (curr.left === null) {
        break;
      }
      prevCurr = curr;
      curr = curr.left;
    }		
    current.data = curr.data;
    if(curr.right !== null) {
      prevCurr.left = curr.right;
    } else {
      prevCurr.left = null;
    }
    return;
  }

  min() {
    let current = this.root();
    if(current === null) {
      return null;
    }
    let min;
    while(current) {
      min = current.data;
      current = current.left;
      
    }
    return min;
  }
  max() {
    let current = this.root();
    if(current === null) {
      return null;
    }
    let max;
    while(current) {
      max = current.data;
      current = current.right;  
    }
    return max;
  }
}

module.exports = {
  BinarySearchTree
};
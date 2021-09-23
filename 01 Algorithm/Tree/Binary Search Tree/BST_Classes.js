class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);


{
  const binarySearch = function(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
      let middle = parseInt((left + right) / 2);
      if(arr[middle] === target){
        return middle;
      }
      
      if(target < arr[middle]){
        right = middle - 1;
      }
      else{
        left  = middle + 1;
      }
    }

    return -1;
  }
}
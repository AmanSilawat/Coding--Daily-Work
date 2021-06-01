// complete binary tree from given array in level order

//new node
class newNode {
    constructor(data) {
        this.data = data;
        this.right = this.left = null;
    }
}

// Function to insert nodes in level order
function insertLevelOrder(arr, root, i, arr_length) {

    // Base case for recursion 
    if (i < arr_length) {
        const temp = new newNode(arr[i])
        root = temp

        // insert left child
        root.left = insertLevelOrder(arr, root.left, 2 * i + 1, arr_length)

        // insert right child
        root.right = insertLevelOrder(arr, root.right, 2 * i + 2, arr_length)
    }
    return root;
}



const arr = [1, 2, 3, 4, 5]
const arr_length = arr.length;
let root = null;
root = new newNode();
debugger;
root = insertLevelOrder(arr, root, 0, arr_length)

console.log(root)
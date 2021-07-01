class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


// Binary Search tree class
class BinarySearchTree {
    constructor() {
        // root of a binary seach tree
        this.root = null;
    }

    insert(data) {
        var new_node = new Node(data);

        if (this.root == null) {
            this.root = new_node;
        } else {
            this.insert_node(this.root, new_node)
        }
    }

    insert_node(node, new_node) {
        if (new_node.data < node.data) {
            if (node.left == null) {
                node.left = new_node;
            } else {
                this.insert_node(node.left, new_node)
            }
        } else {
            if (node.right == null) {
                node.right = new_node;
            } else {
                this.insert_node(node.right, new_node)
            }
        }
    }
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();




BST.insert(10);
BST.insert(5);
BST.insert(-3);
BST.insert(3);
BST.insert(2);
BST.insert(11);

console.log(JSON.stringify(BST))
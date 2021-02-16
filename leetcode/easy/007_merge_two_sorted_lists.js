
// !Linked List Example
class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
node1.next = node2
node2.next = node3

let list = new LinkedList(node1)
// console.log(JSON.stringify(list))
list.head.next.val //returns 2
list.size() //returns 3
list.getLast() //returns ListNode { val: 3, next: null }
list.getFirst() //returns ListNode { val: 1, next: ListNode { val: 2, next: ListNode { val: 3, next: null } } }




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Runtime: 92 ms, faster than 66.00 %
// Memory Usage: 41.6 MB, less than 5.13 % 
var _ = function (l1, l2) {
    if (l1 == null && l2 == null) {
        return null;
    }

    let l1Node = l1;
    let l2Node = l2;
    let arr = [];

    let list;
    while (l1Node != null || l2Node != null) {
        const num1 = l1Node ? l1Node.val : Infinity;
        const num2 = l2Node ? l2Node.val : Infinity;

        if (num1 <= num2) {
            list = new ListNode(l1Node.val);
            l1Node = l1Node.next;
            arr.push(list)
        } else {
            list = new ListNode(l2Node.val);
            l2Node = l2Node.next;
            arr.push(list)
        }
    }

    return createNodeList(arr);
};

function createNodeList(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1].next = arr[i];
    }
    return arr[0]
}

const l1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null
        }
    }
};

const l2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
};


// !optimized version pattern 1
// Runtime: 92 ms, faster than 65.82 %
// Memory Usage: 41.6 MB, less than 5.24 %
var mergeTwoLists = function (l1, l2) {
    if (l1 == null && l2 == null) {
        return null;
    }

    let l1Node = l1;
    let l2Node = l2;
    let arr = [];

    let list;
    let i = 0;
    while (l1Node != null || l2Node != null) {
        const num1 = l1Node ? l1Node.val : Infinity;
        const num2 = l2Node ? l2Node.val : Infinity;

        if (num1 <= num2) {
            list = new ListNode(l1Node.val);
            arr.push(list)
            l1Node = l1Node.next;
        } else {
            list = new ListNode(l2Node.val);
            arr.push(list)
            l2Node = l2Node.next;
        }

        if (i > 0) {
            arr[i - 1].next = arr[i];
        }
        i++
    }

    return arr[0];
};





// !optimized version pattern 2
function makeNode(value) {
    return {
        val: value,
        next: null
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        let node = makeNode(value);

        if (!this.tail) {
            this.head = this.tail = node;
            return node;
        }

        this.tail.next = node;
        this.tail = node;

        return node;
    }
}

// first time run
// Runtime: 84 ms, faster than 93.32 % 
// Memory Usage: 40.7 MB, less than 17.98 %

// second time run
// Runtime: 96 ms, faster than 42.87 %
// Memory Usage: 40.4 MB, less than 49.60 %

var mergeTwoLists = function (l1, l2) {
    if (l1 == null && l2 == null) {
        return null;
    }

    let l1Node = l1;
    let l2Node = l2;
    let nodeList = new List();

    while (l1Node != null || l2Node != null) {
        const num1 = l1Node ? l1Node.val : Infinity;
        const num2 = l2Node ? l2Node.val : Infinity;

        if (num1 <= num2) {
            nodeList.add(l1Node.val);
            l1Node = l1Node.next;
        } else {
            nodeList.add(l2Node.val);
            l2Node = l2Node.next;
        }
    }

    return nodeList.head;
};

console.log(JSON.stringify(mergeTwoLists(l1, l2)));

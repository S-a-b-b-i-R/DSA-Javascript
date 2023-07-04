class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(15);
const f = new Node(12);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//Iterative version
//Breadth-first
function findMin(root) {
    if (root === null) return null;
    let min = root.value;
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
        if (min > node.value) {
            min = node.value;
        }
    }
    return min;
}

function findMax(root) {
    if (root === null) return null;
    let max = root.value;
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
        if (max < node.value) {
            max = node.value;
        }
    }
    return max;
}

console.log(findMin(a));
console.log(findMax(a));

//Recursive version
//Depth first

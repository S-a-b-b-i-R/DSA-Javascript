class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//Iterative sum function
//Breadth-first approach
function iterativeSum(root) {
    if (root === null) return 0;
    let sum = 0;
    let values = [root];
    while (values.length > 0) {
        let node = values.shift();
        sum += node.value;
        if (node.left) values.push(node.left);
        if (node.right) values.push(node.right);
    }
    return sum;
}

//Recursive sum function
//Depth first approach
function recursiveSum(root) {
    console.log("Recursive sum function");
    if (root === null) return 0;
    return root.value + recursiveSum(root.left) + recursiveSum(root.right);
}

console.log(iterativeSum(a));
console.log(recursiveSum(a));

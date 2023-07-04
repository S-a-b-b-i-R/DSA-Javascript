class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//TRAVERSALS

//depth first traversal iterative Right->Left
const depthFirstValues = (root) => {
    if (root === null) return [];
    const result = [];
    const stack = [root];
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.value);
        if (current.right) {
            stack.push(current.right);
        }
        if (current.left) {
            stack.push(current.left);
        }
    }
    return result;
};

//depth first traversal with recursion Right->Left
const depthFirstValuesRecursive = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstValuesRecursive(root.left);
    const rightValues = depthFirstValuesRecursive(root.right);
    return [root.value, ...leftValues, ...rightValues];
};

console.log(depthFirstValues(a));
console.log(depthFirstValuesRecursive(a));

//breadth first traversal iterative Right->Left
const breadthFirstValues = (root) => {
    if (root === null) return [];
    const values = [];
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current.value);
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return values;
};

console.log(breadthFirstValues(a));

//SEARCH FOR VALUES

//depth first search for values using recursive approach
const depthFirstSearchRecursive = (root, target) => {
    if (root === null) return false;
    if (root.value === target) return true;
    return (
        depthFirstSearchRecursive(root.left, target) ||
        depthFirstSearchRecursive(root.right, target)
    );
};

//depth first search for values using iterative approach
const depthFirstSearchIterative = (root, target) => {
    if (root === null) return false;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.value === target) return true;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return false;
};

console.log(depthFirstSearchRecursive(a, "c"));
console.log(depthFirstSearchIterative(a, "f"));

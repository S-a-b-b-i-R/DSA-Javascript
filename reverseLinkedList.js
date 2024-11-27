// Node class for the linked list
class Node {
    constructor(data) {
        this.data = data; // Value of the node
        this.next = null; // Pointer to the next node
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Head of the linked list
    }

    // Method to add a new node at the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If list is empty, make the new node the head
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next; // Traverse to the last node
        }
        current.next = newNode; // Link the last node to the new node
    }

    // Method to print the linked list
    printList() {
        if (!this.head) {
            console.log("The linked list is empty.");
            return;
        }

        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next; // Move to the next node
        }
        console.log("Linked List:", elements.join(" -> "));
    }

    //reverse linkedlist
    reverseRecursive(node = this.head) {
        // Base case: If the list is empty or at the last node
        if (!node || !node.next) {
            this.head = node;
            return node;
        }

        // Reverse the rest of the list
        const reversedListHead = this.reverseRecursive(node.next);

        // Adjust pointers
        node.next.next = node; // Make the next node point back to the current node
        node.next = null; // Set the current node's next to null

        return reversedListHead;
    }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.printList(); // Output: Linked List: 10 -> 20 -> 30
console.log("After reversing");
list.reverseRecursive();
list.printList();

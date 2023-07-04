const Node = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const linkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertNode(nodeData) {
    const node = new Node(nodeData);
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }
};

const lList = new linkedList();
lList.insertNode(10);
lList.insertNode(20);
lList.insertNode(30);
lList.insertNode(40);
lList.insertNode(50);
lList.insertNode(60);
lList.insertNode(70);

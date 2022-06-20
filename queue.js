const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return (this.front === null) && (this.rear === null);
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;
    this.rear = newNode;
  }

  remove() {
    if (this.isEmpty()) return;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
  }

  peekFront() {
    if (this.isEmpty()) return -404;
    return this.front.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.front;
    process.stdout.write('(FRONT) ');
    while (curr != this.rear) {
      process.stdout.write(`${curr.data} --> `);
      curr = curr.next;
    }
    process.stdout.write(`${this.rear.data} (REAR)\n`);
  }
}

const queue = new Queue();

queue.insert(5);
queue.insert(10);
queue.insert(15);
queue.insert(20);
queue.insert(25);

queue.display();

queue.remove();
queue.remove();

queue.display();

console.log(`${queue.peekFront()} is in the front.`);
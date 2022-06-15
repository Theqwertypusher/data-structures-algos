/* 

RESOURCES
javascript implementation https://www.youtube.com/watch?v=1AJ4ldcH2t4&t=568s

NOTES
- A list implementation of a queue allows removal without re-indexing all 
the elements - O(1) vs O(n) of an array

*/

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue = (data) => {
    this.tail++;
    this.storage[this.tail] = data;
  };

  dequeue = () => {
    const el = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return el;
  };
}

// TEST CASES
const queue = new Queue();
queue.enqueue("hi");
queue.enqueue("there");
queue.enqueue("how are you");
console.log("log queue", queue);

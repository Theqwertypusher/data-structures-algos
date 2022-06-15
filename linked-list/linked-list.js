/* 

Resources
javascript implementation https://www.youtube.com/watch?v=ChWWEncl76Y&t=647s


Notes:
- apprend and prepend require no traversal because there's access on both sides
- always consider when linkedList is empty 
- any errors with node add / removal is likely property names incorrect e.g. prev vs previous
- traversals will require "let" trackers
*/

class Node {
  constructor(data = null, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tails = null;
  }

  append = (val) => {
    const node = new Node(val);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      const oldTail = this.tail;
      this.tail = node;
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  };

  prepend = (val) => {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      const oldHead = this.head;
      this.head = node;
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  };

  deleteHead = () => {
    if (!this.head) return null;
    else {
      const removeHead = this.head;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.previous = null;
      }
      return removeHead.value;
    }
  };

  deleteTail = () => {
    if (!this.tail) return null;
    else {
      const removedTail = this.tail;
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.data;
    }
  };

  search = (val) => {
    if (!this.head) return null;
    let curNode = this.head;
    while (curNode) {
      if (curNode.data === val) return curNode;
      curNode = curNode.next;
    }
    return null;
  };
}

// TESTCASES

const list = new DoublyLinkedList();
list.append(4);
list.append(2);
list.append(5);
list.append(2);
list.append(7);
list.deleteTail();
console.log("hi", list.search(5));
console.log(list);

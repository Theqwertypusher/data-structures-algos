/* 
RESOURCES
javascript implementation https://www.youtube.com/watch?v=1AJ4ldcH2t4&t=568s

*/

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push = (data) => {
    this.size++;
    this.storage[this.size] = data;
  };

  pop = () => {
    const data = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return data;
  };

  peek = () => {
    return this.storage[this.size];
  };
}

// TEST CASES

const stack = new Stack();
stack.push("hi");
stack.push("my name");
stack.push("is jason");
console.log("log stack", stack);
console.log("log stack.peek()", stack.peek());
stack.pop();
console.log("log stack", stack);

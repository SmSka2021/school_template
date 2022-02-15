/* eslint-disable max-classes-per-file, no-param-reassign */
// Stack//
class Stack {
  constructor() {
    this.data = []
  }

  push(value) {
    this.data.push(value)
  }

  pop() {
    return this.data.pop()
  }
}

// Queue//
class Queue {
  constructor() {
    this.data = []
  }

  push(value) {
    this.data.push(value)
  }

  pop() {
    return this.data.shift()
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  // stores specified value in list; method should be chainable
  add(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      const tmp = this.tail
      this.tail.next = node
      this.tail = node
      this.tail.prev = tmp
    }
    return this
  }

  // removes first node from list by provided value; method should be chainable;
  delete(value) {
    if (!this.head) {
      return null
    }
    if (this.head.value === value) {
      const tmp = this.head.next
      this.head = null
      this.head = tmp
      this.head.prev = null
      return this
    }
    let currentNode = this.head
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        const tmp = currentNode.next.next
        currentNode.next = null
        currentNode.next = tmp
        currentNode.next.prev = currentNode

        return this
      }
      currentNode = currentNode.next
    }
    return this
  }

  // returns head of the list//
  getHead() {
    return this.head
  }

  // looking for stored value in list using value; method must return true/false
  isExist(value) {
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  // find Node with specified value or by specific function; return node;
  find(value) {
    let currentNode = this.head
    if (typeof value === 'function') {
      while (currentNode) {
        if (value(currentNode.value)) {
          return currentNode
        }
        currentNode = currentNode.next
      }
    }
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }
}

const myList = new LinkedList()
const stack = new Stack()
stack.add(15)
const queue = new Queue()
queue.add(15)
myList.add(2)

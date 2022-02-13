/* eslint-disable max-classes-per-file, no-param-reassign */
class Node {
  constructor(value) {
    this.value = value
    this.next = null
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
      this.tail.next = node
      this.tail = node
    }
    return this
  }

  // add specified value in list after node; method should be chainable
  /* addAfter(value, parentNode) */
  addAfter(value, parentNode) {
    const node = new Node(value)
    const tmp = parentNode.next
    parentNode.next = node
    node.next = tmp
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
      return this
    }
    let currentNode = this.head
    while (currentNode.next != null) {
      if (currentNode.next.value === value) {
        const tmp = currentNode.next.next
        currentNode.next = null
        currentNode.next = tmp
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
    while (currentNode) {
      if (value(currentNode.value)) {
        return currentNode
      }
      currentNode = currentNode.next
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
myList.add(15)
myList.add(2)
myList.add(7)
myList.delete(15)

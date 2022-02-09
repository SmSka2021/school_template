/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.next = null
  }

  // stores specified value in list; method should be chainable
  add(data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = node
    }
    if (!this.next) {
      this.next = node
    }
    return this
  }

  // add specified value in list after node; method should be chainable
  /* addAfter(value, parentNode) */
  addAfter(value, parentNode) {
    const node = new Node()
    node.value = value
    if (!this.head || !this.next) {
      this.head = node
      this.next = node
      return this
    }
    const currentNode = this.head
    while (currentNode.next) {
      if (currentNode === parentNode) {
        const reserv = currentNode.next
        currentNode.next = node
        currentNode.next.next = reserv
      }
      currentNode.next = currentNode.next.next
    }
    return node
  }

  // removes first node from list by provided value; method should be chainable;
  delete(data) {
    if (!this.head) {
      return null
    }
    let deletNode = null
    while (this.head && this.head.data === data) {
      deletNode = this.head
      this.head = this.head.next // назначаю новый head, так как старый удаляю
    }
    let currentNode = this.head
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.data === data) {
          deletNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }
    if (this.next == null && this.next.data === data) {
      this.next = currentNode
    }
    return deletNode
  }

  // returns head of the list//
  getHead() {
    if (!this.head) {
      return null
    }
    const headNode = this.head
    return headNode
  }

  // looking for stored data in list using value; method must return true/false
  isExist(data) {
    if (!this.head) {
      return false
    }
    let currentNode = this.head
    while (currentNode) {
      if (data !== undefined && currentNode.data === data) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }

  // find Node with specified value or by specific function; return node;
  find(data) {
    if (!this.head) {
      return null
    }
    let currentNode = this.head
    if (typeof data === 'function') { // find((element) => { /* ... */ })
      // function should return true/false
      // element - value of node which you look now
      while (currentNode) {
        if (data(currentNode.value)) {
          return true
        }
        currentNode = currentNode.next
      }
      return false
    }
    while (currentNode) {
      if (data !== undefined && currentNode.data === data) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }
}

const myNode = new LinkedList()
myNode.add(15)

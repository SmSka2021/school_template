function filter(func, arr) {
  const res = []
  for (const key of arr) {
    if (func(key)) {
      res.push(key)
    }
  }
  return res
}
filter((a) => a < 5, [1, 7, 3])

function map(func, arr) {
  const resul = []
  for (const key of arr) {
    const item = func(key)
    resul.push(item)
  }
  return resul
}
map((a) => a + 2, [1, 2, 3])

function forEach(fun, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const item = fun(arr[i])
    /* eslint-disable */
    arr[i] = item
    /* eslint-enable */
  }
  return arr
}
forEach((a) => a + 100, [1, 2, 3])

function reduce(fn, arr, start) {
  let result = start
  for (let i = 0; i < arr.length; i += 1) {
    result = fn(result, arr[i])
  }
  return result
}
reduce((a, b) => a * b, [1, 2, 3], 5)

/* bind */
function bind(fn, context) {
  const clone = { ...context }
  return function method() {
    clone.newMethod = fn
    const res = clone.newMethod()
    delete clone.newMethod
    return res
  }
}
const user = {
  el: 10,
  fu() {
    return this.el
  },
}
const a = bind(user.fu, user)
const b = bind(a, { el: 20 })
a() /* 10 */
b() /* 10 */

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
  }

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

  addAfter() {
    const node = new Node()
    if (!this.head || !this.next) {
      this.head = node
      this.next = node
      return this
    }
    const currentNode = this.head
    while (currentNode.next) {
      currentNode.next = currentNode.next.next
    }
    currentNode.next = node
    node.next = null
    return node
  }

  delete(data) {
    if (!this.head) {
      return null
    }
    let deletNode = null
    while (this.head && this.head.data === data) {
      deletNode = this.head
      this.head = this.head.next
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

  getHead() {
    if (!this.head) {
      return null
    }
    const headNode = this.head
    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.next = null
    }
    return headNode
  }

  find(data) {
    if (!this.head) {
      return null
    }
    let currentNode = this.head
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

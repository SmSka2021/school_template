/* eslint-disable max-classes-per-file, no-param-reassign, consistent-return, no-undef */
class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  // returns root of the tree
  root() {
    if (!this.root) {
      return null
    }
    return this
  }

  // stores specified value in tree using key; method should be chainable
  insert(key, value) {
    const newNode = new Node(key, value)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let curNod = this.root
    while (curNod) {
      if (newNode.key < curNod.key) {
        if (!curNod.left) {
          curNod.left = newNode
          return this
        }
        curNod = curNod.left
      } else {
        if (!curNod.right) {
          curNod.right = newNode
          return this
        }
        curNod = curNod.right
      }
    }
    return this
  }

  // looking for stored data in tree using key
  search(key, nod = this.root) {
    if (this.root === null) {
      return null
    }
    const curNod = nod
    if (key === curNod.key) {
      return curNod.value
    }
    if (key < curNod.key) {
      return this.search(key, curNod.left)
    }
    if (key > curNod.key) {
      return this.search(key, curNod.right)
    }
    return this
  }

  contains(value) {
    if (this.root === null) {
      return false
    }
    const nod = this.root
    const result = new Set()
    const traverse = function Contain(node = nod) {
      result.add(node.value)
      if (result.has(value)) {
        return true
      }
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
    }
    traverse(nod)
    return result.has(value)
  }

  // removes node from tree by provided key; method should be chainable;
  remove(key) {
    this.root = this.removeNode(this.root, key)
    return this
  }

  static minNode(node) {
    while (node.left !== null) {
      node = node.left
    }
    return node
  }

  removeNode(current = this.root, key) {
    if (key == null || key === undefined) {
      return null
    }
    if (key === current.key) {
      if (current.left == null && current.right == null) {
        return null
      }
      if (current.left == null) {
        return current.right
      }
      if (current.right == null) {
        return current.left
      }
      const tempNode = BinaryTree.minNode(current.right)
      current.key = tempNode.key
      current.value = tempNode.value
      current.right = this.removeNode(current.right, current.key)
      return current
    }
    if (key < current.key) {
      current.left = this.removeNode(current.left, key)
      return current
    }
    current.right = this.removeNode(current.right, key)
    return current
  }
}

const myBinaryTree = new BinaryTree()
myBinaryTree.insert(10, 'juk').insert(1, 'f').insert(17, 'f').insert(7, 'fg')

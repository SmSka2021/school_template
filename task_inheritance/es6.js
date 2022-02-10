/* eslint-disable max-classes-per-file */
function Builder(value) {
  this.value = value
}
Builder.prototype.getValue = function getValue() {
  return this.value
}
Builder.prototype.plus = function plus(...args) {
  const arr = [].concat(...args)
  let res = this.value
  for (let i = 0; i < arr.length; i += 1) {
    res += arr[i]
  }
  this.value = res
  return this
}
class StringBuilder extends Builder {
  constructor(value = '') {
    super(value)
    this.getValue = this.getValue.bind(this)
  }

  minus(n) {
    const str = this.value
    const chars = str.slice(0, str.length - n)
    this.value = chars
    return this
  }

  multiply(n) {
    const str = this.value
    const newStr = str.repeat(n)
    this.value = newStr
    return this
  }

  divide(n) {
    const str = this.value
    const k = Math.floor(str.length / n)
    const newStr = str.slice(0, k)
    this.value = newStr
    return this
  }

  remove(str) {
    const oldStr = this.value
    const sizeStr = str.length
    const start = oldStr.search(str)
    const newStr = oldStr.slice(0, start) + oldStr.substr(start + sizeStr)
    this.value = newStr
    return this
  }

  sub(from, n) {
    const oldStr = this.value
    const newStr = oldStr.slice(from, n + 1)
    this.value = newStr
    return this
  }

  static run() {
    const letter = 'This is a static method'
    return letter
  }
}

const strBuilder1 = new StringBuilder('Hello')
strBuilder1.divide(2)

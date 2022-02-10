/* eslint-disable max-classes-per-file */
function Builder(value) {
  if (value) {
    this.value = value
  } else {
    if (typeof value === 'number') {
      this.value = 0
    }
    if (typeof value === 'string') {
      this.value = ''
    }
  }
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
  return res
}
class StringBuilder extends Builder {
  constructor(value) {
    super(value)
    this.getValue = this.getValue.bind(this)
  }

  getValue() {
    const getterValue = super.getValue()
    return getterValue
  }

  plus() {
    const pluss = super.plus()
    return pluss
  }

  minus(n) {
    const str = this.value
    const chars = str.slice(0, str.length - n)
    return chars
  }

  multiply(n) {
    const str = this.value
    const newStr = str.repeat(n)
    return newStr
  }

  divide(n) {
    const str = this.value
    const k = Math.floor(str.length / n)
    const newStr = str.slice(0, k)
    return newStr
  }

  remove(str) {
    const oldStr = this.value
    const sizeStr = str.length
    const start = oldStr.search(str)
    const newStr = oldStr.slice(0, start) + oldStr.substr(start + sizeStr)
    return newStr
  }

  sub(from, n) {
    const oldStr = this.value
    const newStr = oldStr.slice(from, n + 1)
    return newStr
  }

  static run() {
    const letter = 'This is a static method'
    return letter
  }
}

const strBuilder1 = new StringBuilder('Hello')
strBuilder1.divide(2)

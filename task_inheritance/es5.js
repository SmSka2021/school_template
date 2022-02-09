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
  const arr = []
  let res
  arr.concat(this.value, ...args)
  for (let i = 0; i < arr.length; i += 1) {
    res += arr[i]
  }
  return res
}

function IntBuilder(value) { // onstructor takes starting integer, if not passed starts with 0
  Builder.call(this, value)
}
IntBuilder.prototype.minus = function minus(...args) {
  let res = this.value
  const arr = []
  arr.concat(...args)
  for (let i = 0; i < arr.length; i += 1) {
    res -= arr[i]
  }
  return res
}
IntBuilder.prototype.multiply = function multiply(n) { // multiply param n on stored value
  return n * this.value
}
IntBuilder.prototype.divide = function divide(n) {
  return Math.trunc(this.value / n)
}
IntBuilder.prototype.mod = function mod(n) {
  return (this.value % n)
}
IntBuilder.random = function random(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from
}
IntBuilder.prototype = Object.create(Builder.prototype)

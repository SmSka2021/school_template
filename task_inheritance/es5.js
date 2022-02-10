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

function IntBuilder(value = 0) { // constructor takes starting integer, if not passed starts with 0
  Builder.call(this, value)
}
IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.minus = function minus(...args) {
  let res = this.value
  const arr = [...args]
  for (let i = 0; i < arr.length; i += 1) {
    res -= arr[i]
  }
  this.value = res
  return this
}
IntBuilder.prototype.multiply = function multiply(n) { // multiply param n on stored value
  const res = n * this.value
  this.value = res
  return this
}
IntBuilder.prototype.divide = function divide(n) {
  const res = Math.trunc(this.value / n)
  this.value = res
  return this
}
IntBuilder.prototype.mod = function mod(n) {
  const res = this.value % n
  this.value = res
  return this
}
IntBuilder.random = function random(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from
}

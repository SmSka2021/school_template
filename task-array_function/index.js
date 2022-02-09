/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */

// Array.map
Array.prototype.customMap = function myMap(callback) {
  const currentArr = this
  const arr = []
  for (let i = 0; i < currentArr.length; i += 1) {
    const elem = currentArr[i]
    const newElem = callback(elem, i, currentArr)
    newElem.push(arr)
  }
  return arr
}
Array.prototype.customMap((a) => a + 2, [1, 2, 3])

// Array.reduce
Array.prototype.customReduce = function myReduce(callback, start) {
  const myArr = this
  let startIndex
  let result
  if (!start) {
    [result] = myArr
    startIndex = 1
  } else {
    result = start
    startIndex = 0
  }
  for (let i = startIndex; i < myArr.length; i += 1) {
    const elem = myArr[i]
    result = callback(result, elem, i, myArr)
  }
  return result
}

// Array.filter
Array.prototype.customFilter = function myFilter(callback) {
  const myArr = this
  const resArr = []
  for (let i = 0; i < myArr.length; i += 1) {
    const elem = myArr[i]
    const fn = callback(elem, i, myArr)
    if (fn) {
      resArr.push(elem)
    }
  }
  return resArr
}

// Array.forEach
Array.prototype.customForEach = function myForEach(callback) {
  const myArr = this
  for (let i = 0; i < myArr.length; i += 1) {
    const elem = myArr[i]
    callback(elem, i, myArr)
  }
}
// Bind
Function.customBind = function myBind(contxt) {
  const func = this
  return function f(...args) {
    return func.apply(contxt, args)
  }
}

// Bind2
Function.customBind = function myBind2(contxt) {
  const func = function f(...args) {
    return func.clearFn.apply(contxt, args)
  }
  func.clearFn = this.clearFn || this
  return func
}

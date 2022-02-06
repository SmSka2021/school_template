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

'use strict'

function inc(n) {
  return n + 1
}

var a = 5
const b = inc(a)
console.dir({ a, b })

function incNum(num) {
    num.n++
}

let obj = { n: 5 }
incNum(obj)
console.dir(obj)

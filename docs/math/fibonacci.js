'use strict'
function fibonacci (n, n1, n2) {
  if (n <= 1) {
    return n2
  }
  return fibonacci(n - 1, n2, n1 + n2)
}

console.log(fibonacci(10, 1, 1))

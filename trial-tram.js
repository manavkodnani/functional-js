function repeat(operation, num) {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

function trampoline(fn) {
  while (fn && typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function (operation, num) {
  trampoline(function () {
    return repeat(operation, num)
  })
}

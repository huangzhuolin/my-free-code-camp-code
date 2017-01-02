/**
 * Created by zenthon on 17/1/2.
 */

function addTogether() {
  // 1 arg
  if (arguments.length === 1) {
    if (typeof arguments[0] !== 'number' || isNaN(arguments[0])) {
      return undefined;
    }
    var adder = arguments[0];

    function add(num) {
      if (typeof num !== 'number' || isNaN(num)) {
        return undefined;
      }
      return num + adder;
    }

    return add;
  }

  // 2 args
  if (!Array.prototype.every.call(arguments, arg => typeof arg === 'number' && !isNaN(arg))) {
    return undefined;
  }
  return arguments[0] + arguments[1];
}

addTogether(2, 3);

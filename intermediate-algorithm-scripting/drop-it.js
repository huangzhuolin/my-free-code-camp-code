/**
 * Created by zenthon on 17/1/2.
 */

function dropElements(arr, func) {
  // Drop them elements.

  if (arr.length === 0) {
    return [];
  }
  if (func(arr[0])) {
    return arr;
  }

  return dropElements(arr.slice(1), func);
}

dropElements([1, 2, 3], function (n) {
  return n < 3;
});

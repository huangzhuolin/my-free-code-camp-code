/**
 * Created by zenthon on 17/1/2.
 */


function findElement(arr, func) {
  var matchArr = arr.filter(func);
  return matchArr.length > 0 ? matchArr[0] : undefined;
}

findElement([1, 2, 3, 4], function (num) {
  return num % 2 === 0;
});
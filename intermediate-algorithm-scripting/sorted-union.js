/**
 * Created by zenthon on 17/1/2.
 */


function uniteUnique(arr) {
  return Array.prototype.reduce.call(arguments, (arr1, arr2) => {
    arr2.forEach(item => {
      if (!arr1.includes(item)) {
        arr1.push(item);
      }
    });
    return arr1;
  }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


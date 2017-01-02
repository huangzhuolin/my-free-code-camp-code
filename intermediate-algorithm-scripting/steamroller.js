/**
 * Created by zenthon on 17/1/2.
 */

function steamrollArray(arr) {
  // I'm a steamroller, baby
  console.info(arr);

  if (!Array.isArray(arr)){
    return [arr];
  }

  return arr.map(function (item) {
    return steamrollArray(item);
  }).reduce((a, b) => a.concat(b), []);

}

steamrollArray([1, [2], [3, [[4]]]]);

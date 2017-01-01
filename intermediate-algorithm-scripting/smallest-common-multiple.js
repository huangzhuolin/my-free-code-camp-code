function smallestCommons(arr) {
  var smaller = Math.min(...arr);
  var bigger = Math.max(...arr);

  function _getFactors(num) {
    // _getFactors(20) will return {2: 2, 5: 1}
    var result = {};
    var cur = 2;
    while (num > 1) {
      if (num % cur === 0){
        result[cur] = 0;
        while(num % cur === 0){
          result[cur]++;
          num = num / cur;
        }
      }
      cur++;
    }
    return result;
  }

  var factorsMap = {};
  for(var i = smaller; i <= bigger; i++){
    var curFactorsMap = _getFactors(i);
    Object.keys(curFactorsMap).forEach(function (k) {
      factorsMap[k] = Math.max(factorsMap[k] || 0, curFactorsMap[k]);
    });
  }

  var result = 1;
  Object.keys(factorsMap).forEach(function (k) {
    result = result * Math.pow(k, factorsMap[k]);
  });

  return result;
}

smallestCommons([1,5]);
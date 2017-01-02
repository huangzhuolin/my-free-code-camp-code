/**
 * Created by zenthon on 17/1/2.
 */

function binaryAgent(str) {
  function _binaryString2Int(s) {
    return s.split('').reverse().map((v, i) =>
    (v.charCodeAt(0) - '0'.charCodeAt(0)) * Math.pow(2, i)).reduce((a, b) => a + b, 0);
  }

  return String.fromCharCode(...str.split(' ').map(_binaryString2Int));
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

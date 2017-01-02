/**
 * Created by zenthon on 17/1/2.
 */


function truthCheck(collection, pre) {
  // Is everyone being true?

  return collection.every(e => e.hasOwnProperty(pre) && e[pre]) ;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {
  "user": "Laa-Laa",
  "sex": "female"
}, {"user": "Po", "sex": "female"}], "sex");

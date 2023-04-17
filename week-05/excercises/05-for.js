console.log("Excercise 05");
console.log("ALERTS a) b) c)");

/* Excercise a) */

var wordsA = ["lorem", "ipsum", "dolor", "sit", "amet"];
for (var i = 0; i < wordsA.length; i++) {
  alert(wordsA[i]);
}

/* Excercise b) */

var wordsB = ["lorem", "ipsum", "dolor", "sit", "amet"];

for (var i = 0; i < wordsB.length; i++) {
  var wordModified = wordsB[i][0].toUpperCase() + wordsB[i].substring(1);
  alert(wordModified);
}

/* Excercise c) */

var sentence = "";
var wordsC = ["lorem", "ipsum", "dolor", "sit", "amet"];

for (let i = 0; i < wordsC.length; i++) {
  sentence = sentence + wordsC[i];
}
alert(sentence);

/* Excercise d) */

var arrayEmpty = [];
for (var i = 0; i < 10; i++) {
  arrayEmpty.push(i);
}
console.log("Answer of Ex d) " + arrayEmpty);

console.log(" ");

console.log("Excercise 02");

/* Excercise a) */

var textA = "lorem ipsum dolor sit amet";
var textUp = textA.toUpperCase();
console.log("Answer of Ex a) " + textUp);

/* Excercise b) */

var textB = "lorem ipsum dolor sit amet";
var textB5 = textB.substring(0, 5);
console.log("Answer of Ex b) " + textB5);

/* Excercise c) */

var textC = "lorem ipsum dolor sit amet";
var extC = textC.substring(textC.length - 3);
console.log("Answer of Ex c) " + extC);

/* Excercise d) */

var textD = "lorem ipsum dolor sit amet";
var firstLetter = textD.substring(0, 1).toUpperCase();
var restLetters = textD.substring(1).toLowerCase();
var textDFinal = firstLetter + restLetters;
console.log("Answer of Ex d) " + textDFinal);

/* Excercise e) */

var textE = "lorem ipsum dolor sit amet";
var firstSpace = textE.indexOf(" ");
console.log("Answer of Ex e) " + firstSpace);

/* Excercise f) */

var textF = "lorem ipsum";
var firstSpaceF = textF.indexOf(" ");
var firstWord = textF.substring(0, firstSpaceF).toLowerCase();
var secondWord = textF.substring(firstSpaceF + 1).toLowerCase();
var firstWordMayusc = firstWord.substring(0, 1).toUpperCase() + firstWord.substring(1);
var secondWordMayusc = secondWord.substring(0, 1).toUpperCase() + secondWord.substring(1);
var final = firstWordMayusc + " " + secondWordMayusc;
console.log("Answer of Ex f) " + final);

console.log(" ");
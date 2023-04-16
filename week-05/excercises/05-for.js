/* Ejercicio a) */

var palabrasA = ["lorem", "ipsum", "dolor", "sit", "amet"];
for (var i = 0; i < palabrasA.length; i++) {
  alert(palabrasA[i]);
}

/* Ejercicio b) */

var palabrasB = ["lorem", "ipsum", "dolor", "sit", "amet"];

for (var i = 0; i < palabrasB.length; i++) {
  var palabraModificada = palabrasB[i][0].toUpperCase() + palabrasB[i].substring(1);
  alert(palabraModificada);
}

/* Ejercicio c) */

var sentence = "";
var palabrasC = ["lorem", "ipsum", "dolor", "sit", "amet"];

for (let i = 0; i < palabrasC.length; i++) {
  sentence = sentence + palabrasC[i];
}
alert(sentence);

/* Ejercicio d) */

var arrayVacio = [];
for (var i = 0; i < 10; i++) {
  arrayVacio.push(i);
}
console.log(arrayVacio);
console.log("Excercise 04");
console.log("ALERTS");

/* Excercise a) */

var numRandom = Math.random();
if (numRandom >= 0.5) {
  alert("Greater than or equal to 0.5");
} else {
  alert("Lower than 0.5");
}

/* Excercise b) */

var age = Math.floor(Math.random() * 101);
if (age < 2) {
  alert("Bebe");
} else if (age >= 2 && age <= 12) {
  alert("Niño");
} else if (age >= 13 && age <= 19) {
  alert("Adolescente");
} else if (age >= 20 && age <= 30) {
  alert("Joven");
} else if (age >= 31 && age <= 60) {
  alert("Adulto");
} else if (age >= 61 && age <= 75) {
  alert("Adulto mayor");
} else {
  alert("Anciano");
}

console.log(" ");
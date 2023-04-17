console.log("Excercise 03");

/* Excercise a) */

var monthsA = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
console.log("Answer of Ex a) " + monthsA[4]);
console.log("Answer of Ex a) " + monthsA[10]);

/* Excercise b) */

var monthsB = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
monthsB.sort();
console.log("Answer of Ex b) " + monthsB);

/* Excercise c) */

var monthsC = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
monthsC.unshift("MonthFirst");
monthsC.push("MonthEnd");
console.log("Answer of Ex c) " + monthsC);

/* Excercise d) */

var monthsD = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
monthsD.shift();
monthsD.pop();
console.log("Answer of Ex d) " + monthsD);

/* Excercise e) */

var monthsE = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
monthsE.reverse();
console.log("Answer of Ex e) " + monthsE);

/* Excercise f) */

var monthsF = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
var allMonths = monthsF.join("-");
console.log("Answer of Ex f) " + allMonths);

/* Excercise g) */

var monthsG = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
var copyMayoNoviembre = monthsG.slice(4, 11);
console.log("Answer of Ex g) " + copyMayoNoviembre);

console.log(" ");
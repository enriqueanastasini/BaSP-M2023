console.log("Excercise 06");

/* Excercise a) */

function sumaA(a1, a2) {
  return a1 + a2;
}
var resultA = sumaA(5, 10);
console.log("Answer of Ex a) " + resultA);

/* Excercise b) */

function sumaB(b1, b2) {
  if (isNaN(b1) || isNaN(b2)) {
    alert("One of the parameters is not a number");
    return NaN;
  }
  return b1 + b2;
}
var resultB = sumaA("hello", 30);
console.log("Answer of Ex b) " + resultB);

/* Excercise c) */

function validateInteger(c1) {
  if (c1 % 1 === 0) {
    return true;
  } else {
    return false;
  }
}
var resultCInt = validateInteger(20);
console.log("Answer of Ex c) " + resultCInt);

var resultCFloat = validateInteger(20.5);
console.log("Answer of Ex c) " + resultCFloat);

/* Excercise d) */

function sumaD(d1, d2) {
  if (isNaN(d1) || isNaN(d2)) {
    alert("One of the parameters is not a number");
    return NaN;
  } else if (validateInteger(d1) && validateInteger(d2)) {
    return d1 + d2;
  }
  alert("One of the parameters is not an integer");
  var d1Int = Math.round(d1);
  var d2Int = Math.round(d2);
  return d1Int + d2Int;
}
var resultD1 = sumaD("hello", 20);
console.log("Answer of Ex d) " + resultD1);

var resultD2 = sumaD(30.8, 30);
console.log("Answer of Ex d) " + resultD2);

var resultD3 = sumaD(40, 50);
console.log("Answer of Ex d) " + resultD3);

/* Excercise e) */

function areNaN(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return true;
  }
  return false;
}

function validateInteger2(a) {
  if (a % 1 === 0) {
    return a;
  } else alert("The parameter is not an integer");
  var numInt = Math.round(a);
  return numInt;
}

function sumaE(a, b) {
  if (areNaN(a, b) !== true) {
    var numIntA = validateInteger2(a);
    var numIntB = validateInteger2(b);
    return numIntA + numIntB;
  } else {
    alert("One of the parameters is not a number");
    return NaN;
  }
}
var resultE1 = sumaD("hello", 20);
console.log("Answer of Ex e) " + resultE1);

var resultE2 = sumaD(30.8, 30);
console.log("Answer of Ex e) " + resultE2);

var resultE3 = sumaD(40, 50);
console.log("Answer of Ex e) " + resultE3);
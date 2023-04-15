/* Ejercicio a) */

var mesesA = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(mesesA[4]);
console.log(mesesA[10]);

/* Ejercicio b) */

var mesesB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mesesB.sort();
console.log(mesesB);

/* Ejercicio c) */

var mesesC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mesesC.unshift("MesInicio");
mesesC.push("MesFinal");
console.log(mesesC);

/* Ejercicio d) */

var mesesD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mesesD.shift();
mesesD.pop();
console.log(mesesD);

/* Ejercicio e) */

var mesesE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
mesesE.reverse();
console.log(mesesE);

/* Ejercicio f) */

var mesesF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var todosMeses = mesesF.join('-');
console.log(todosMeses);

/* Ejercicio g) */

var mesesG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copiaMayoNoviembre = mesesG.slice(4, 11);
console.log(copiaMayoNoviembre);
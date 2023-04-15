/* Ejercicio a) */

var textoA = "lorem ipsum dolor sit amet";
var textoMayuscula = textoA.toUpperCase();
console.log(textoMayuscula);

/* Ejercicio b) */

var textoB = "lorem ipsum dolor sit amet";
var textoB5 = textoB.substring(0, 5);
console.log(textoB5);

/* Ejercicio c) */

var textoC = "lorem ipsum dolor sit amet";
var toC = textoC.substring(textoC.length - 3);
console.log(toC);

/* Ejercicio d) */

var textoD = "lorem ipsum dolor sit amet";
var primerLetra = textoD.substring(0, 1).toUpperCase();
var restoDeLetras = textoD.substring(1).toLowerCase();
var textoDFinal = primerLetra + restoDeLetras;
console.log(textoDFinal);

/* Ejercicio e) */

var textoE = "lorem ipsum dolor sit amet";
var primerEspacio = textoE.indexOf(" ");
console.log(primerEspacio);

/* Ejercicio f) */

var textoF = "lorem ipsum";
var primerEspacioF = textoF.indexOf(" ");

var primerPalabra = textoF.substring(0, primerEspacioF).toLowerCase();
var segundaPalabra = textoF.substring(primerEspacioF + 1).toLowerCase();

var primerPalabraMayusc = primerPalabra.substring(0, 1).toUpperCase() + primerPalabra.substring(1);
var segundaPalabraMayusc = segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1);

var final = primerPalabraMayusc + " " + segundaPalabraMayusc;

console.log(final);


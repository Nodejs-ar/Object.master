/**/

/*************************************************/
/* Ejercicio  Object.master                      */
/*************************************************/
var assert = require('assert');

var data = [0, 1, 2, 3, 4];

/* Solucion */

(function() {
	/*

	No se puede poner codigo fuera de esta funcion.
	No se pueden usar operadores aritmeticos en ninguna parte.
	<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators>

	*/


})();

/* El problema. Se tiene que cumplir (data[0]+data[1]+data[2]+data[3]+data[4] === 10)*/
/* No se puede tocar absolutamente nada del codigo bajo esta linea */

for (var i = 0; i < 5; i++) {
	data[i] = null;
}

var result = data.reduce(function(p, c) {
	return p + c;
})

assert.equal(result, 10, 'Lo siento!!! (' + result + ' !== 10)');
console.log('Ganaste!!!');

/********************************************/
/* EL PRIMERO QUE LO SOLUCIONE TIENE PREMIO */
/********************************************/

/**/
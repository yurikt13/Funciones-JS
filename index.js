'use strict';

//Ejercicio explicación: Paralelismo del Café

/*let nombreDelCafe = ''; //definir prompt
//const otroCafe = ''; //variable global la que está fuera de la función
nombreDelCafe = prompt('Ingrese el cafe que desea');

function hacerCafe (nombreDelCafe) {
    //const otroCafe = ''; //variable local, solo para este bloque de código, para esta función

    return `Aquí está su ${nombreDelCafe}, que lo disfrutes.`;
}

console.log(hacerCafe('Capuccino'));*/


//Funciones sin parámetros
function saludo () {
    return 'Hola';

}

console.log(saludo());

//Función con parámetros
/*let numeroUno = 0;
let numeroDos = 0;

numeroUno = parseInt(prompt('Ingrese el número 1'));
numeroDos = parseInt(prompt('Ingrese el número 2'));
function sumar (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumar(numeroUno, numeroDos));*/


/* //Tipos de datos
let nombre = 'Yurtk'; //string
let age = 16; //strig numero
let haveChildren = false; //booleano, verdadero o falso
let studies = {
    nombre: 'UDEA',
    años: 5
} //objeto, dentro de la variable studies puedo tener mucho datos
let monts = ['enero', 'febrero', 'marzo']; //arreglo

console.log(age);
console.log(nombre);
console.log(haveChildren);
console.log(studies);
console.log(monts[0]);*/


//Funciones Anónimas= no tienen nombre, no sabemos como se llama. Pero si podemos definir una constante con un nombre que va a ser igual a esa función
const sum = function (a,b) {
    return a + b;
}

console.log(sum(2,3)); //para llamar la funcion anónima


//Parámetros y valores de retorno
function multiplicacion (a, b) {
    const result = a*b;

    return result;
}

/*const multiResult = multiplicacion(5,6);
console.log(multiResult);*/ //modo1

console,console.log(multiplicacion(5,6)); //modo2



//Ámbito de las variables
const variableGlobal = 'Soy global';

//Asegurarnos que entra en un bloque if(condicional)

if ( 2 === 2) {
    const variableGlobal = 'Realmente no soy global';
    const variableNoGlobal = 'No soy global';
    
    //Devolver
    console.log(variableGlobal);
    console.log(variableNoGlobal);
}
//Fuera de su Bloque
console.log(variableGlobal);
//console.log(variableNoGlobal);


/* '2' == 2 //verdadero
'2' === 2 //falso */


//podemos accerder a variables del ambito superior(global)
let globalVar = 'Ey, I am global';

if (2 === 2) {
    globalVar = 'Ey, I am STILL Global';

    //devolver
    console.log(globalVar);
}

console.log(globalVar);


//No genera conflicto el tener dos constantes iguales en diferentes funciones
function f1 () {
    const item = 1;
    return item;
}

function f2 () {
    const item = 2;
    return item;
}

console.log(f1());
console.log(f2());


//Funciones flecha ECMAS6

const multi =  (a, b) => { //modo1
    return a*b;
}

console.log(multi(3, 4));

/*const multi = function (a, b) { //modo2
    return a * b;
}*/



//podemos evitar los parentesis cuando la función tenga un único parámetro a diferencia de las funciones normales

/*const printWattingTime = minutes => { //solo cuando le damos UNA instrucción, lo podemos hacer sin return cuando tenemos una sola sentencia
    
    console.log(`Please, wait ${minutes} minutes`);

}*/

//equivale a, usando palabra reservada function
const printWattingTime = minutes => `Please, wait ${minutes} minutes`;
    
    console.log(printWattingTime(4));









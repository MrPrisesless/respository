//Declarando función
function saludo() {
    console.log('hola mi gente');
}

//Invocar función
saludo()

//otra función
function suma(numUno, numDos) {
    return numUno + numDos
    }

//invocar la función

console.log(suma(2,3))

//Crear una función llamada esMayor, que reciba dos parámetros
//Y utilizando un condicional, comparar cuál número es mayor.

function esMayor(numUno, numDos) {
   return numUno > numDos    
}

let numUno = 120
let numDos = 60
let funcionEsMayor = esMayor(numUno, numDos)

if (funcionEsMayor == true) {
    console.log(numUno, 'es mayor que', numDos);
    
} else {
    console.log(numDos, 'es mayor que', numUno);
}
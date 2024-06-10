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

let funcionEsMayor = esMayor(30, 60)

if (funcionEsMayor == true) {
    console.log('120 es mayor que 60');
    
} else {
    console.log('60 es mayor que 120');
}
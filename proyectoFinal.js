//1. Crear una función llamada calcular, que reciba tres parámetros.
//EL primer parámetro será una variable que tomará el tipo de operación.
//Eñ segundo parámetro será un número, y el tercero otro número.

function calcular(operacion, numUno, numDos) {
    if (operacion == 'suma') {
        return numUno + numDos

    } else if (operacion == 'resta') { 
        return numUno - numDos 
    } else if (operacion == 'division') {
        return numUno / numDos
    } else if (operacion == 'multiplicacion') {
        return numUno * numDos
    } else {
        return 'Uh oh! hubo un error inesperado'}
}
console.log(calcular('wazaaaa', 51, 167))
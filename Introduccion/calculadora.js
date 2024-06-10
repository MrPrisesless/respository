// realizar variables

let numeroUno = 12
console.log('el valor del numero uno es =',numeroUno)
let numeroDos = 76
console.log('el valor del numero dos es =',numeroDos)

let suma = numeroUno + numeroDos
console.log('el valor de la suma del numero uno y dos es =',suma)
let resta = numeroUno - numeroDos
console.log('el valor de la resta del numero uno y dos es =',resta)
let multiplicacion = numeroUno * numeroDos
console.log('el valor de la multiplicacion del numer uno y dos es =',multiplicacion)
let division = numeroUno / numeroDos
console.log('el valor de la division entre el numero uno y dos =',division)
    
console.log('ahora veremos si el numero dos es igual que nulo y indefinido. Si no es igual, se mostrara todas las variables anteriores')
    if (numeroDos == null || numeroDos == undefined) {
    console.log('Uh oh, hay un dato inválido')
    } else {
    console.log(suma,resta,multiplicacion,division)    
}    

console.log('ahora veremos si el numero uno es igual que nulo y indefinido. Si no es igual, se mostrara todas las variables anteriores')
  if (numeroUno == null || numeroUno == undefined) {
    console.log('Uh oh, hay un dato inválido')
  } else {
    console.log(suma,resta,multiplicacion,division)
  }
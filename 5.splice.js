let letras = ['a', 'b', 'c', 'd', 'e'];
letras.splice(letras.length, 0, 'f'); //.push
console.log(letras);

letras.splice(letras.length - 1, 1); //.pop
console.log(letras);

letras.splice(0, 1); //.shift
console.log(letras);

letras.splice(0, 0, 'f'); //.unshift
console.log(letras);
// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  
  return array[0]
  // Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  return (array[array.length - 1])
  // Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  return array.length;
  // Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
    //return array.map(e => e + 1 )
  let nuevoarray = []
  for(let i = 0; i < array.length; i++) {
    nuevoarray[i] = array[i] +1
  }
  return nuevoarray;
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}
 

function agregarItemAlFinalDelArray(array, elemento) {

array.push(elemento);
return array
  
  
  
  //let nuevoaray = [array,elemento]
  //return nuevoaray
  //return array.push(elemento)
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento)
  return array;
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}

function dePalabrasAFrase(palabras) {
 

   return palabras.join(' ');

  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}

function arrayContiene(array, elemento) {
  for(let i=0; i < array.length ; i++)
  
  if(array[i] === elemento) {
    return true;
  } 
  
  {
    return false;
  }
  // preguntar porque si coloco else arroja error{´ñpl´´´´´¡¡¡¡}
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}

function agregarNumeros(numeros) {
  let total = numeros.reduce((a,b) => a+b, 0)
  return total; 
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  let suma = resultadosTest.reduce((a,b) => a+b, 0)
let promedio = suma / resultadosTest.length;
return promedio;
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {
  return Math.max(...numeros)
  //return Math.max.apply(null,numeros)
  
   // la solucion en el prep solo sirve si el primer elemento del array
   //es el segundo termino mas alto??
        // var maximo = numeros[0];
          // for(var i = 1; i < numeros.length; i++) {
        // if(numeros[i] > maximo) { 
          // maximo = numeros[i];

   // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function multiplicarArgumentos() {
  if (arguments.length < 1) return 0;
  let multiplica = 1
  for ( let i = 0 ; i < arguments.length ; i++) {
    multiplica = multiplica * arguments[i]
  } return multiplica;
  

  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};

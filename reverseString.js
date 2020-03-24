//Invertir una cadena
/* Invierta la cadena provista.
Es posible que deba convertir la cadena en una matriz antes de poder revertirla.
Su resultado debe ser una cadena. */


function reverseString(str) {
    //Inicializamos la variable con una cadena vacía que luego se llenará con nuestros caracteres de forma inversa
    var newString = ""; 
//.length devuelve el número de caracteres de un string o cadena (en este caso es 'G' porque está devolviendo el último)
    for (var i = str.length - 1; i >= 0; i--) {  // i-- para decrementar
        newString += str[i];  // newString = newString + str[i];
    }
    return newString;
}
reverseString('Greetings from Earth'); // usando la función



/* function reverseString(str) { 
    
var splitString = str.split("");  // Método split: es para separar los caracteres en subcaracteres 
var reverseArray = splitString.reverse();  // Método reverse: es para invertir los caracteres dentro de una matriz
var joinArray = reverseArray.join("");  // Método join: es para unir los caracteres dentro una matriz
    
return joinArray; // "olleh" 
}
reverseString("hello"); */

/* hello

h e l l   o
0 1 2 3   4   
e l l o + h
  l l o + e
    l o + l
      o + l
        + o */
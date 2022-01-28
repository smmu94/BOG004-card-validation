/* Se declara el objeto validator el cual consta de dos métodos que en este caso corresponden a 
dos funciones, isValid y maskify. Recibe la variable creditCardNumber de la extensión validator.js
 */
const validator = {

// En este método, se convierte la variable recibida a una cadena la función "toString"
// Se separa esa cadena en un arreglo con la función "split"
// Se revierte el arreglo con la función "reverse"
// La variable indexSize1 guarda la longitud del arreglo con myArray1.length
// Se emplea un ciclo for, en el cual me trabaja los números de posición par (en este caso como el índice empieza en cero los números pares corresponden a las posiciones impares)
// Los números de posiciones pares se mutiplican por 2 y a su vez esos números si son mayores a 9 se suman los dígitos de ese número
// los números de las posiciones impares se conviierten en enteros ya que antes correspondían a string
// Ya teniendo mi arreglo listo, sumo los números que llena dicho array con la función "reduce"
// Esa suma se guarda en una variable. Si el módulo que se obtiene al dividir esta suma entre 10 es cero, retorna true, si no retorna false
// Este booleano se retorna para que pueda ser usado en index.js
  
  isValid: (creditCardNumber) => {
    const numero = creditCardNumber.toString();
    const myArray = numero.split("");
    var myArray1 = myArray.reverse();
    const indexSize1 = myArray1.length;

    for (var i = 0; i < indexSize1; i++) {
      if (i % 2 != 0) {
        myArray1[i] = 2 * myArray1[i];
      }
      if (i % 2 != 0 && myArray1[i] > 9) {
        myArray1[i] = myArray1[i] - 9;
      }
      if (i % 2 == 0) {
        myArray1[i] = parseInt(myArray1[i]);
      }
    }

    const suma = myArray1.reduce((acum, valor) => acum + valor, 0);
    var resp = suma % 10 == 0;
    return resp;
  },

  // En este método, se obtiene nuevamente el número de TC el cual se convierte en arreglo
  // Se usa un ciclo for para tapar los números con un #, exceptuando los útimos 4 dígitos
  // Siempre que la posición actual sea menor a la longitud del arreglo menos 4 y dicha longitud sea mayor a 4, se convierte ese dígito en #
  // Se convierte el nuevo arreglo en cadena nuevamente y se retorna para ser usado en index.js

  maskify: (creditCardNumber) => {
    const myArray2 = creditCardNumber.split("");
    const indexSize2 = myArray2.length;

    for (var j = 0; j < indexSize2; j++) {
      if (j < indexSize2 - 4 && indexSize2 > 4) {
        myArray2[j] = "#";
      }
    }
    const myString = myArray2.join("");
    return myString;
  },
};

// Se exporta el objeto validator con sus métodos
export default validator;

// Se importa el objeto validator con sus métodos
import validator from "./validator.js";

var acum = 0;

/*Con este evento al hacer click en el botón Agregar se ejecuta la función precio1
  Esta función acumula el precio de la prenda que se está agregando y lo refleja en la pantalla
  al final de la página. Así mismo con las funciones precio2 a precio6 */
if (document.getElementById("agregar1")) {
  var btn1 = document.getElementById("agregar1");
  const precio1 = () => {
    acum = acum + 230;
    document.getElementById("pagar").innerHTML = " " + acum + " €";
  };
  btn1.addEventListener("click", precio1);
}

if (document.getElementById("agregar2")) {
  var btn2 = document.getElementById("agregar2");
  const precio2 = () => {
    acum = acum + 210;
    document.getElementById("pagar").innerHTML = " " + acum + " €";
  };
  btn2.addEventListener("click", precio2);
}

if (document.getElementById("agregar3")) {
  var btn3 = document.getElementById("agregar3");
  const precio3 = () => {
    acum = acum + 175;
    document.getElementById("pagar").innerHTML = " " + acum + " €";
  };
  btn3.addEventListener("click", precio3);
}

if (document.getElementById("agregar4")) {
  var btn4 = document.getElementById("agregar4");
  const precio4 = () => {
    acum = acum + 120;
    document.getElementById("pagar").innerHTML = " " + acum + " €";
  };
  btn4.addEventListener("click", precio4);
}

if (document.getElementById("agregar5")) {
  var btn5 = document.getElementById("agregar5");
  const precio5 = () => {
    acum = acum + 110;
    document.getElementById("pagar").innerHTML = " " + acum + " €";
  };
  btn5.addEventListener("click", precio5);
}

if (document.getElementById("agregar6")) {
  var btn6 = document.getElementById("agregar6");
  const precio6 = () => {
    acum = acum + 122;
    document.getElementById("pagar").innerHTML = " " + acum + " €";
  };
  btn6.addEventListener("click", precio6);
}

// En este evento, al hacer click en el botón comprar se muestra la segunda pantalla
var btn7 = document.getElementById("comprar");
const window2 = () => {
  document.getElementById("container_1").style.display = "none";
  document.getElementById("container_2").style.display = "none";
  document.getElementById("container_3").style.display = "none";
  document.getElementById("tcvalid").style.display = "block";
  document.getElementById("box1").style.display = "block";
}
 btn7.addEventListener("click", window2);

/*En este caso, al hacer click en el botón ingresar me ejecuta la función creditCardV
la cual me guarda el número de TC y lo manda como argumento al objeto validator
a los métodos isValid y maskify. Se ejecutan todas las operaciones en la extensión validator.js,
y regresa al argumento un valor booleano para isValid y el número de TC enmascarado para maskify.
Se guardan en las variables mensaje y tcfinal respectivamente. Si mensaje corresponde a "true", 
se muestra un mensaje positivo de la compra en la pantalla. Si mensaje corresponde a "false", 
emite un mensaje negativo y pide ingresar nuevamente un número válido */

var btn = document.getElementById("ingresar");
const creditCardV = () => {
  var tcnumero = document.getElementById("tcnum").value;

  const mensaje = validator.isValid(tcnumero);
  const tcfinal = validator.maskify(tcnumero);

  if (mensaje == true) {
    document.getElementById("second").innerHTML ="Como su tarjeta Nro " + tcfinal + " es válida, su compra se realizó de manera satisfactoria.";
    document.getElementById("woman").style.display = "block";
    document.getElementById("negative").style.display = "none";
    document.getElementById("volver").style.display = "block";
  } else {
    document.getElementById("second").innerHTML ="La tarjeta de crédito Nro " + tcfinal + " es inválida, por favor ingrese otro número!.";
    document.getElementById("negative").style.display = "block";
    document.getElementById("woman").style.display = "none";
    document.getElementById("volver").style.display = "block";
  }
};
btn.addEventListener("click", creditCardV);

/* Con este evento se ejecuta el regreso a la pantalla principal, e inicializa en cero
el acumulador del total a pagar por si se quiere realizar otra compra */
var btn8 = document.getElementById("volver");
const volverPantalla1 = () => {
  document.getElementById("container_1").style.display = "block";
  document.getElementById("container_2").style.display = "flex";
  document.getElementById("container_3").style.display = "flex";
  document.getElementById("tcvalid").style.display = "none";
  document.getElementById("box1").style.display = "none";
  document.getElementById("pagar").innerHTML = "0 €";
  acum = 0;
};
btn8.addEventListener("click", volverPantalla1);

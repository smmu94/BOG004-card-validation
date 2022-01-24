import validator from './validator.js';

var acum = 0;

if (document.getElementById("agregar1"))
{ 
  var btn1 = document.getElementById("agregar1");
  const fun1 = () => {
   acum = acum + 230;
   document.getElementById("pagar").innerHTML = " " + acum + " €";
  }
  btn1.addEventListener("click", fun1); 
} 

if (document.getElementById("agregar2"))
{ 
  var btn2 = document.getElementById("agregar2");
  const fun2 = () => {
   acum = acum + 210;
   document.getElementById("pagar").innerHTML = " " + acum + " €";
  }
  btn2.addEventListener("click", fun2); 
} 

if (document.getElementById("agregar3"))
{ 
  var btn3 = document.getElementById("agregar3");
  const fun3 = () => {
   acum = acum + 175;
   document.getElementById("pagar").innerHTML = " " + acum + " €";
  }
  btn3.addEventListener("click", fun3); 
}

if (document.getElementById("agregar4"))
{ 
  var btn4 = document.getElementById("agregar4");
  const fun4 = () => {
   acum = acum + 120;
   document.getElementById("pagar").innerHTML = " " + acum + " €";
  }
  btn4.addEventListener("click", fun4); 
}

if (document.getElementById("agregar5"))
{ 
  var btn5 = document.getElementById("agregar5");
  const fun5 = () => {
   acum = acum + 110;
   document.getElementById("pagar").innerHTML = " " + acum + " €";
  }
  btn5.addEventListener("click", fun5); 
}

if (document.getElementById("agregar6"))
{ 
  var btn6 = document.getElementById("agregar6");
  const fun6 = () => {
   acum = acum + 122;
   document.getElementById("pagar").innerHTML = " " + acum + " €";
  }
  btn6.addEventListener("click", fun6); 
}

var btn7 = document.getElementById("comprar");
const fun7 = () => {
  document.getElementById("container_1").style.display = "none";
  document.getElementById("container_2").style.display = "none";
  document.getElementById("container_3").style.display = "none";
  document.getElementById("tcvalid").style.display = "block";
  document.getElementById("box1").style.display = "block";
  document.getElementById("foot").style.display = "none";

}
btn7.addEventListener("click", fun7); 



var btn = document.getElementById("ingresar");
const fun = () => {
    
  var tcnumero = document.getElementById("tcnum").value;
 
  const mensaje = validator.isValid(tcnumero);
  const tcfinal = validator.maskify(tcnumero);

  if(mensaje == true)
  {
    document.getElementById("second").innerHTML = "Como su tarjeta Nro " + tcfinal + " es válida, su compra se realizó de manera satisfactoria.";
    document.getElementById("woman").style.display = "block";
    document.getElementById("negative").style.display = "none";
    document.getElementById("volver").style.display = "block";
  }else {
    document.getElementById("second").innerHTML = "La tarjeta de crédito Nro " + tcfinal + " es inválida, por favor ingrese otro número!.";
    document.getElementById("negative").style.display = "block";
    document.getElementById("woman").style.display = "none";
    document.getElementById("volver").style.display = "block";
  }
}
btn.addEventListener("click", fun);

var btn8 = document.getElementById("volver");
const fun8 = () => {
  document.getElementById("container_1").style.display = "block";
  document.getElementById("container_2").style.display = "flex";
  document.getElementById("container_3").style.display = "flex";
  document.getElementById("tcvalid").style.display = "none";
  document.getElementById("box1").style.display = "none";
  document.getElementById("foot").style.display = "block";
  document.getElementById("pagar").innerHTML ="0 €";
  acum = 0;

}
btn8.addEventListener("click", fun8); 





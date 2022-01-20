import validator from './validator.js';

var btn = document.getElementById("ingresar");
const fun1 = () => {
    
  var tcnumero = document.getElementById("tcnum").value;
 
  const mensaje = validator.isValid(tcnumero);
  const tcfinal = validator.maskify(tcnumero);

  if(mensaje == true)
  {
  alert("la tarjeta de crédito Nro " + tcfinal + " es válida, puede terminar su compra!");
  }else {
  alert("La tarjeta de crédito Nro " + tcfinal + " es inválida, por favor ingrese otro número!");
  }
}
btn.addEventListener("click", fun1);
const validator = {

  isValid : creditCardNumber => {
  const numero = creditCardNumber.toString();
  const myArray = numero.split("");
  var myArray1 = myArray.reverse();
  const indexSize1 = myArray1.length;
  
  for (var i = 0; i < indexSize1; i++)
  {
     if(i % 2 != 0)
     {
       myArray1[i] = 2 * myArray1[i];
     } 
     if((i % 2 != 0) && (myArray1[i] > 9))
     {
       myArray1[i] = myArray1[i] - 9;
     }
     if(i % 2 == 0)
     {
      myArray1[i] = parseInt(myArray1[i]);
     }
  }

  const suma = myArray1.reduce((acum,valor) => acum + valor,0);
  var resp = suma % 10 == 0;
  return resp;
  }
  ,
  maskify : creditCardNumber => {
  
  const myArray2 = creditCardNumber.split("");
  const indexSize2=myArray2.length;
  
  for (var j = 0; j < indexSize2; j++)
  {
    if((j < (indexSize2 - 4)) && indexSize2 > 4)
    {
      myArray2[j] = '#';
    }
  }
  const myString = myArray2.join("");
  return myString;
  
  }
  };
  
  export default validator;
  
  
  
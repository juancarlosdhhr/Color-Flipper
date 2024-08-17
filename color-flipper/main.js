import './style.css'

const COLOR_PALETTE = {
  '#28262C': 'Raisin Black',
  '#998FC7': 'Blue Bell',
  '#D4C2FC': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#14248A': 'Resolution Blue'
}

/* Haremos uso del método Object.keys, con el cual convertiremos nuestro
 objeto en un array y a través de un forEach generaremos tantos options
  necesitemos con la longitud del mismo asignándole como valor el color en
   si y como texto el valor de cada una de las claves:*/

 

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}

addOptionsToColorPicker()

/* De esta manera ya hemos “compartimentado” una de las funcionalidades 
que va a tener nuestra aplicación web por si en un futuro necesitamos 
hacer un módulo independiente con esta misma. */

/*Al haber realizado un bucle a la hora de generar las opciones, podemos 
aumentar en un futuro nuestro objeto tanto como queramos que nuestra 
aplicación funcionará exactamente igual.  */

/* Lo siguiente que vamos a implementar es el cambio del color de fondo
 y el texto reflejado una vez seleccionado en nuestro select. Para ello
  vamos a hacer uso de los escuchadores de eventos. */

  const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
  
    colorPickerSelect.addEventListener("change", (event) => {
  
      const newColor = event.target.value; 
      //Almacenamos el código de color
  
      document.body.style.backgroundColor = newColor;
      //Le aplicamos el background color con el código de color seleccionado
      const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}` 
  colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
    });
  };
  
  addOptionsToColorPicker();
  addEventListenerToColorPicker();

  /* Lo que acabamos de hacer es añadirle al select un escuchador de eventos
   que cada vez que cambie gracias al evento “change” seteará el valor del
    target del evento (es decir, el código hexadecimal en una constante)
     y lo va a setear mediante estilos en linea en el body del documento.



De esta forma, cada vez que se detecte un cambio en el select recuperará 
la opción elegida, almacenará el value de cada option y lo seteará como fondo:*/

/* Lo que nos faltaría sería setear en el h2 de nuestro primer bloque el 
texto con el color seleccionado. Para ello vamos a ir un momento a nuestro
 HTML y asignarle un id a dicho h2 para poder recuperarlo de mejor manera 
 en JavaScript: */

 /* Al haber recuperado el valor de la clave seleccionada podremos ver
  en nuestra aplicación que efectivamente nos está seteando el texto 
  adecuado gracias al método innerText. */

  /*  Como extra vamos a indicarle al seteador de texto que si es 
  undefined, como es el caso de la opción dada por guión, que nos 
  ponga un guión gracias a un ternario.*/

  /* Y además podemos concatenar el código de color para que nos muestre 
  el nombre y su código: */


  



// OBJETO CON LAS PROPIEDADES DE A CALCULADORA

let propiedades = {

    teclasCalculadora: document.querySelectorAll("#calculadora ul li"), //almaceno TODAS las teclas de la calculadora
    accion: null 

}

// OBJETO CON LOS METODOS DE LA CALCULADORA

let metodos = {

    inicio: function(){ // Con el bucle for recorro todos los numeros que hay en la lista de teclas (las teclads de la calculadora son una propiedad declarada en el objeto propiedades)

        for ( let i = 0 ; i<propiedades.teclasCalculadora.length ; i++){

            propiedades.teclasCalculadora[i].addEventListener("click", metodos.oprimirTecla ) //llamo al evento click definido debajo de esta.
        }

    }, 

    oprimirTecla: function(tecla){  // esta función me muestra la clase del atributo que se esta clickeando y se almacena en la propiedad accion 

      propiedades.accion = tecla.target.getAttribute("class");
      metodos.calculadora(propiedades.accion); // nuevo metodo llamado calculadora que se va a ejecutar una vez tengamos las clases
       
    },

    calculadora: function(accion){ //va a recibir por parametro la accion que se almacena cuando se oprimen las teclas

        switch(accion){
            case "numero":
            console.log("numero");
            break;

            case "signo":
            console.log("signo")
            break;
            
            case "decimal":
            console.log("decimal");
            break;
            
            case "igual":
            console.log("igual");
            break;   
           
        }

    }

}

metodos.inicio(); //ejecuto la funcion declarada
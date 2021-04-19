// OBJETO CON LAS PROPIEDADES DE A CALCULADORA

let propiedades = {

    teclasCalculadora: document.querySelectorAll("#calculadora ul li"),              //almaceno TODAS las teclas de la calculadora
    accion: null,
    digito:null,                                                                     //Para cuando de click, se almacene aca el digito
    operaciones: document.querySelector("#operaciones"),                             //Los digitos que se van a mostrar en pantalla
    cantidadSignos: 0,                                                               //Para cuantificar la cantidad de signos que se pueden usar
    cantidadDecimales: false,                                                        //Para contar la cantidad de decimales, hago que sea booleana para decir que si estamos en estado falso, entonces puedo aplicar un decimal, caso contrario NO
    resultado: false                                                                 //Para que me avise que hay resultado o no

}

// OBJETO CON LOS METODOS DE LA CALCULADORA

let metodos = {

    inicio: function(){         // Con el bucle for recorro todos los numeros que hay en la lista de teclas (las teclads de la calculadora son una propiedad declarada en el objeto propiedades)

        for ( let i = 0 ; i<propiedades.teclasCalculadora.length ; i++){

            propiedades.teclasCalculadora[i].addEventListener("click", metodos.oprimirTecla )   //llamo al evento click definido debajo de esta.
        }

    }, 



    teclado: function(){

        document.addEventListener("keydown", metodos.oprimir);
        
    },



    oprimir: function(tecla){
        
        
        console.log(tecla.keyCode)

        if(tecla.keyCode == 48 || tecla.keyCode == 96){                   //keyCode es el codigo de la tecla y de esta forma voy a saber que tecla se oprime
            propiedades.accion="numero";
            propiedades.digito="0"
        }

        else if(tecla.keyCode == 49 || tecla.keyCode == 97){
            propiedades.accion="numero";
            propiedades.digito="1"
        }

        else if(tecla.keyCode == 50 || tecla.keyCode == 98){
            propiedades.accion="numero";
            propiedades.digito="2"
        }

        else if(tecla.keyCode == 51 || tecla.keyCode == 99){
            propiedades.accion="numero";
            propiedades.digito="3"
        }

        else if(tecla.keyCode == 52 || tecla.keyCode == 100){
            propiedades.accion="numero";
            propiedades.digito="4"
        }

        else if(tecla.keyCode == 53 || tecla.keyCode == 101){
            propiedades.accion="numero";
            propiedades.digito="5"
        }

        else if(tecla.keyCode == 54 || tecla.keyCode == 102){
            propiedades.accion="numero";
            propiedades.digito="6"
        }

        else if(tecla.keyCode == 55 || tecla.keyCode == 103){
            propiedades.accion="numero";
            propiedades.digito="7"
        }

        else if(tecla.keyCode == 56 || tecla.keyCode == 104){
            propiedades.accion="numero";
            propiedades.digito="8"
        }

        else if(tecla.keyCode == 57 || tecla.keyCode == 105){
            propiedades.accion="numero";
            propiedades.digito="9"
        }

        else if(tecla.keyCode == 187 || tecla.keyCode == 107){
            propiedades.accion="signo";
            propiedades.digito="+"
        }

        else if(tecla.keyCode == 189 || tecla.keyCode == 109){
            propiedades.accion="signo";
            propiedades.digito="-"
        }

        else if(tecla.keyCode == 88 || tecla.keyCode == 106){
            propiedades.accion="signo";
            propiedades.digito="*"
        }

        else if(tecla.keyCode == 111 || tecla.keyCode == 220){
            propiedades.accion="signo";
            propiedades.digito="/"
        }

        else if(tecla.keyCode == 190 || tecla.keyCode == 110){
            propiedades.accion="decimal";
            propiedades.digito="."
        }

        else if(tecla.keyCode == 13){
            propiedades.accion="igual";            
        }

        else if(tecla.keyCode == 8 || tecla.keyCode == 46){
            propiedades.accion=""
            metodos.borrarCalculadora();
        }

        else{
            propiedades.accion="";
            propiedades.digito=""
        }

        

        metodos.calculadora(propiedades.accion,propiedades.digito,)
    },




    oprimirTecla: function(tecla){          // esta función me muestra la clase del atributo que se esta clickeando y se almacena en la propiedad accion 

      propiedades.accion = tecla.target.getAttribute("class");
      propiedades.digito = tecla.target.innerHTML;                        // llamo al digito que esta en el html
      
      metodos.calculadora(propiedades.accion,propiedades.digito,);        // nuevo metodo llamado calculadora que se va a ejecutar una vez tengamos las clases y digitos
       
    },

    calculadora: function(accion, digito){                               //va a recibir por parametro la accion que se almacena cuando se oprimen las teclas

        switch(accion){
            case "numero":

                propiedades.cantidadSignos = 0;                             //La cantidad de signos regresa a 0 cuando escribo un numero, de esta forma voy a volver a poder colocar un signo                           
                
                if(propiedades.operaciones.innerHTML == "0"){                 // Si el contenido html es igual a 0 , reemplazo los digitos
                    
                    propiedades.operaciones.innerHTML = digito;              // Cuando apreto los botones van a aparecer los numeros      

                }else{
                    
                    if(propiedades.resultado){
                        
                        propiedades.resultado = false                       //si resultado es verdado  convierto el resultado en falso para poder seguir usando la calculadora con mi operacion
                        propiedades.operaciones.innerHTML=digito;           //Si hay resultado entonces reemplazar tablero por el nuevo digito

                    }else{

                        propiedades.operaciones.innerHTML += digito         // Si ya tengo digitos escritos (y no aprete el signo igual) agrego a estos digitos lo que yo accione pero no los reemplazo
                    }                  
                }                
            
                break;

            case "signo":
                
                propiedades.cantidadSignos++                                // Cuando apreto un signo , los signos pasan de 0 a 1 (se incrementa)                              
                   
                    if(propiedades.cantidadSignos == "1"){                    // Solamente si la cantidad de signos es = 1 , me deja colocar el digito

                        if(propiedades.operaciones.innerHTML == "0"){         // Si el operador esta en 0 , no dejo que se agregue un signo, sino que se agrega otro 0
                            
                            propiedades.operaciones.innerHTML= 0

                        }else if(propiedades.cantidadDecimales){
                            
                            propiedades.operaciones.innerHTML += 0;          // Si operador no es 0, dejo que agregue el signo    
                            propiedades.cantidadSignos = 0;                  // Hago que cuando escribo un nuevo signo operacional, la cantidad de decimales disponibles vuelva a 0 poniendolo en FALSE
                            propiedades.cantidadDecimales = false;                   // Cuando agrego digito matematico pido que el resultado tambien pase a falso         
                        
                        }else{

                            propiedades.operaciones.innerHTML +=digito;

                            propiedades.cantidadDecimales = false;

                            propiedades.resultado = false;
                        }
                    }
                                
                break;
            
            case "decimal":
                
                if(!propiedades.cantidadDecimales && propiedades.cantidadSignos!=1 ){                        
                        
                    propiedades.operaciones.innerHTML += digito;            // Si la propiedad de decimales es falsa (o sea que no hay ninguno) , entonces puedo agregar el digito

                    propiedades.cantidadDecimales = true;                  // Si ya hay un decimal, entonces NO puedo agregar 
                    propiedades.resultado = false;
                }                                  
                break;
            
            
            
            case "igual":
                
                propiedades.operaciones.innerHTML = eval(propiedades.operaciones.innerHTML); //eval separa signos matematicos y les da su signo
                
                let expresion = /./g;

                if(!expresion.test(propiedades.operaciones.innerHTML)){

                    propiedades.cantidadDecimales = true;
                }

                propiedades.resultado = true;                                                // convierto la propiedad de resultado a verdadero

                break;   
           
        }

    },

    borrarCalculadora: function(){
        
        propiedades.operaciones.innerHTML = 0;
        propiedades.cantidadDecimales = false;
        propiedades.resultado = false

    }

}

metodos.inicio(); //ejecuto la funcion declarada
metodos.teclado()
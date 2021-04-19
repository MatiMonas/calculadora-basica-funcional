// OBJETO CON LAS PROPIEDADES DE A CALCULADORA

let propiedades = {

    teclasCalculadora: document.querySelectorAll("#calculadora ul li"),              
    accion: null,
    digito:null,                                                                     
    operaciones: document.querySelector("#operaciones"),                             
    cantidadSignos: 0,                                                               
    cantidadDecimales: false,                                                        
    resultado: false                                                                 

}

// OBJETO CON LOS METODOS DE LA CALCULADORA

let metodos = {

    inicio: function(){         

        for ( let i = 0 ; i<propiedades.teclasCalculadora.length ; i++){

            propiedades.teclasCalculadora[i].addEventListener("click", metodos.oprimirTecla )   
        }
    }, 

    teclado: function(){

        document.addEventListener("keydown", metodos.oprimir);        
    },


    oprimir: function(tecla){     
               
        if(tecla.keyCode == 48 || tecla.keyCode == 96){                   
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




    oprimirTecla: function(tecla){           

      propiedades.accion = tecla.target.getAttribute("class");
      propiedades.digito = tecla.target.innerHTML;                        
      
      metodos.calculadora(propiedades.accion,propiedades.digito,);       
       
    },

    calculadora: function(accion, digito){                               

        switch(accion){
            case "numero":

                propiedades.cantidadSignos = 0;                             
                
                if(propiedades.operaciones.innerHTML == "0"){                 
                    
                    propiedades.operaciones.innerHTML = digito;             

                }else{
                    
                    if(propiedades.resultado){
                        
                        propiedades.resultado = false                      
                        propiedades.operaciones.innerHTML=digito;           
                    }else{

                        propiedades.operaciones.innerHTML += digito         
                    }                  
                }             
                break;

            case "signo":
                
                propiedades.cantidadSignos++                                
                   
                    if(propiedades.cantidadSignos == "1"){                    

                        if(propiedades.operaciones.innerHTML == "0"){         
                            
                            propiedades.operaciones.innerHTML= 0

                        }else if(propiedades.cantidadDecimales){
                            
                            propiedades.operaciones.innerHTML += 0;          
                            propiedades.cantidadSignos = 0;                 
                            propiedades.cantidadDecimales = false;                  
                        
                        }else{

                            propiedades.operaciones.innerHTML +=digito;

                            propiedades.cantidadDecimales = false;
                            propiedades.resultado = false;
                        }
                    }                                
                break;
            
            case "decimal":
                
                if(!propiedades.cantidadDecimales && propiedades.cantidadSignos!=1 ){                        
                        
                    propiedades.operaciones.innerHTML += digito;            

                    propiedades.cantidadDecimales = true;                  
                    propiedades.resultado = false;
                }                                  
                break;
            
            
            
            case "igual":
                
                propiedades.operaciones.innerHTML = eval(propiedades.operaciones.innerHTML); 
                
                let expresion = /./g;

                if(!expresion.test(propiedades.operaciones.innerHTML)){

                    propiedades.cantidadDecimales = true;
                }
                propiedades.resultado = true;                                             

                break;   
           
        }

    },

    borrarCalculadora: function(){
        
        propiedades.operaciones.innerHTML = 0;
        propiedades.cantidadDecimales = false;
        propiedades.resultado = false

    }
}

metodos.inicio(); 
metodos.teclado()
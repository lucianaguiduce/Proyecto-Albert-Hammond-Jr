//Inicio de bienvenida pido que escriba si o sino te lo perdiste adios. Extra

let entrada = prompt ("Estas seguro de querer entrar a la mejor web del mundo? ")

let nombre = "si"

   if(entrada == nombre){
          alert("Bienvenido a la web de Albert Hammond Jr")
   }
    else{
        alert("Te lo perdiste. Adios")
    }

    //Funciones
    function valida_entrada(elegida)
    {
        let pos = -1;
        switch( elegida )
        {
            case "campo":
                pos = 0;
            break;
            
            case "platea":
                pos = 1;
            break;
            
            case "VIP":
                pos = 2;
            break;
            
            default:
                pos = -1;
            break;
        }
    
        return pos;
    }
    
    function aviso(tipo)
    {
        if(tipo == 1)
        {
            alert("Compraste la entrada super bien!");
        }
        else if(tipo == 0)
        {
            alert("No existe esa entrada, solo campo, platea y VIP");
        }
    }
    
    /*
     Array
    */
    let entradasElegidas   = [] // new Array();
    let entradasExistentes = ["Entrada Campo","Entrada Platea","Entrada VIP"];
    
    let confirma = confirm("Desea comprar una entrada?");
    while(confirma == true)
    {
        // prompt pide que escriba, lo guardo en elegida
        let elegida = prompt('Que entrada quiere: ' + entradasExistentes.join(","));
    
        // le envío elegida a la funcion valida_entrada
        let resultado = valida_entrada(elegida);  // 0 1 2 -1;
    
        if( resultado != -1 )
        {
            entradasElegidas.push( entradasExistentes[resultado] );
            aviso(1);
        }
        else
        {
            aviso(0);
        }
    
        confirma = confirm("Desea comprar otra entrada?");	// si o no
    }
    
    alert( entradasElegidas.join(",") );

//alert me devuelve las entradas que seleccionó

    

       
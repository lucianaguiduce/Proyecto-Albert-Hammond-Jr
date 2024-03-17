//Inicio de bienvenida

//let entrada = prompt ("Estas seguro de querer entrar a la mejor web del mundo? ")


//let nombre = "si"

 //   if(entrada == nombre){
    //      alert("Bienvenido a la web de Albert Hammond Jr")
 //   }
  //  else{
 //       alert("Te lo perdiste. Adios")
   // }

//

const entradas = []

let comprar = confirm("¿Queres estar en el próximo recital de Albert Hammond Jr?")

if(comprar == true){
    let entradaAcomprar = prompt("¿Queres comprar entrada vip, entrada campo o entrada meet and greet?")

    while(comprar){
        switch(entradaAcomprar){
            case "entrada vip":
                entradas.push("entrada vip")

                break
            case "entrada campo":
                entradas.push("entrada campo")

                break
            case "entrada meet and greet":
                entradas.push("entrada meet and greet")

                break
            default:
                alert("No tenemos otro tipo de entrada disponible a la venta")

        }
        comprar = confirm("¿Quiere seguir comprardo?")
        if(comprar){
            entradaAcomprar = prompt("¿Queres comprar entrada vip, entrada campo o entrada meet and greet?")
        }
        comprar = cancel( "Hasta el próximo recital de Albert, adiós!")
        if(comprar){
            alert ("Bye!")
        }
    }

}else{
    alert("Hasta el próximo recital de Albert, adiós!")
}

function felicitar(parametro1,parametro2,parametro3){
    console.log ("Felicidades por tu compra" + "parametro1" + "parametro2" + "parametro3");

}

let parametro1 = "entrada campo"
let parametro2= "entrada vip"
let parametro3= "entrada meet and greet"

felicitar();







    

       
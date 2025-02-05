let listaNumerosSorteados = [];
let numeroMaximo = 10; 
let numeroSecreto = generarNumeroAleatorio();
let intentos = 0;



//Tarea está implementar un maximo numero de juegos antes de que se reinicie. 

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento(){
    intentos++;
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value); 
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Ganaste! Ese era el número secreto. Lo lograste en ${intentos} ${(intentos==1)?  "vez" : "veces" }`);
         document.getElementById("reiniciar").removeAttribute("disabled");
         document.getElementById("numeroUsuario").setAttribute("disabled", true)
    } else{ 
      
      if (numeroDeUsuario < numeroSecreto){
      asignarTextoElemento("p", "El numero secreto es mayor");
      } 
      else{
          asignarTextoElemento("p", "El numero secreto es menor");
      }
      
    }
      return;
} 

function condicionesIniciales(){
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Ingresa un número del 1 al ${numeroMaximo}`);
  document.getElementById("numeroUsuario").removeAttribute("disabled"); 
  numeroSecreto = generarNumeroAleatorio();
  intentos = 0;
}

function nuevoJuego(){
    //limpiar caja
    limpiarCaja();
    //mostrar texto de intervalo
    //reiniciar intentos
    //generar nuevo número secreto
    condicionesIniciales();
    //desabilitar el botón de nuevo juego
    document.getElementById("numeroUsuario").removeAttribute("disabled");
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //Para el caso en el que ya se hayan colocado los numero del 1 al 10 de manera aleatoria
    if(listaNumerosSorteados.length == 10){
      asignarTextoElemento("p","Se han sorteado todos los números");
    }
    else{
      //SI el numero generado pertenece a la lista de numeros sorteados, se vuelve a generar un numero aleatorio
      if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroAleatorio();
      } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
  }
    
    
}

function limpiarCaja(){
    document.querySelector("#numeroUsuario").value = "";
}

condicionesIniciales();
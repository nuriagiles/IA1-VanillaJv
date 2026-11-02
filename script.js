/*DATOS DE LA PARTIDA*/
//Datos de jugadores 
const fichaJugador1 = document.querySelector(".jugador1");
const fichaJugador2 = document.querySelector(".jugador2");
const jugadores = [
  {
    Nombre: "Jugador A",
    position: { PositionX: 0, PositionY: 0 },
    NumeroDado : "",
    Casilla: 1
  },
  {
    Nombre: "Jugador B",
    position: { PositionX: 0, PositionY: 0 },
    NumeroDado: "",
    Casilla: 1
  }
];


//Array de partida
const partida = []

/*Tablero*/
const Tablero = [
  {
    id: 0
  },
  { 
    id: 1
  },
  { id: 2, saltarCasilla: 21 },
  { 
    id: 3, 
    pregunta: "¿En qué continente se encuentra Egipto?", 
    opciones: ["África", "América", "Asia"], 
    respuesta: "África" 
  },
  { 
    id: 4, 
    pregunta: "¿Cuál es el planeta más grande del sistema solar?", 
    opciones: ["Marte", "Saturno", "Júpiter"], 
    respuesta: "Júpiter" 
  },
  { id: 5, pierdeTurno: true },
  { 
    id: 6, 
    pregunta: "¿Cuántos colores tiene el arcoíris?", 
    opciones: ["5", "7", "10"], 
    respuesta: "7" 
  },
  { id: 7, saltarCasilla: 11 },
  { 
    id: 8, 
    pregunta: "¿Quién pintó la 'Mona Lisa'?", 
    opciones: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh"], 
    respuesta: "Leonardo da Vinci" 
  },
  { 
    id: 9, 
    pregunta: "¿Cuál es el océano más grande del mundo?", 
    opciones: ["Océano Atlántico", "Océano Pacífico", "Océano Índico"], 
    respuesta: "Océano Pacífico" 
  },
  { 
    id: 10, 
    pregunta: "¿En qué año llegó el hombre a la Luna?", 
    opciones: ["1969", "1959", "1975"], 
    respuesta: "1969" 
  },
  { 
    id: 11, 
    pregunta: "¿Cuál es el animal terrestre más rápido del mundo?", 
    opciones: ["León", "Guepardo", "Gacela"], 
    respuesta: "Guepardo" 
  },
  { id: 12, volverCasillaInicio: 1 },
  { 
    id: 13, 
    pregunta: "¿De qué país es originario el sushi?", 
    opciones: ["China", "Japón", "Corea del Sur"], 
    respuesta: "Japón" 
  },
  { id: 14, saltarCasilla: 29 },
  { 
    id: 15, 
    pregunta: "¿Cuál es el metal más caro del mundo?", 
    opciones: ["Oro", "Platino", "Rodio"], 
    respuesta: "Rodio" 
  },
  { 
    id: 16, 
    pregunta: "¿Qué gas abunda más en la atmósfera de la Tierra?", 
    opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono"], 
    respuesta: "Nitrógeno" 
  },
  { 
    id: 17, 
    pregunta: "¿Cuántos huesos tiene el cuerpo humano adulto?", 
    opciones: ["180", "206", "250"], 
    respuesta: "206" 
  },
  { id: 18, pierdeTurno: true },
  { 
    id: 19, 
    pregunta: "¿Cuál es el río más largo del mundo?", 
    opciones: ["Nilo", "Amazonas", "Misisipi"], 
    respuesta: "Amazonas" 
  },
  { 
    id: 20, 
    pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?", 
    opciones: ["Miguel de Cervantes", "Lope de Vega", "Federico García Lorca"], 
    respuesta: "Miguel de Cervantes" 
  },
  { 
    id: 21, 
    pregunta: "¿Cuál es el idioma más hablado del mundo nativamente?", 
    opciones: ["Inglés", "Español", "Chino mandarín"], 
    respuesta: "Chino mandarín" 
  },
  { id: 22, avanzarDosCasillas: true },
  { 
    id: 23, 
    pregunta: "¿En qué país se encuentra la torre Eiffel?", 
    opciones: ["Italia", "Francia", "Alemania"], 
    respuesta: "Francia" 
  },
  { 
    id: 24, 
    pregunta: "¿Cuál es el mamífero más grande del mundo?", 
    opciones: ["Elefante africano", "Ballena azul", "Tiburón blanco"], 
    respuesta: "Ballena azul" 
  },
  { id: 25, malaSuerte: 9 },
  { 
    id: 26, 
    pregunta: "¿Qué instrumento musical tiene 88 teclas?", 
    opciones: ["Piano", "Guitarra", "Violín"], 
    respuesta: "Piano" 
  },
  { 
    id: 27, 
    pregunta: "¿Cuál es el país más grande del mundo por superficie?", 
    opciones: ["Canadá", "China", "Rusia"], 
    respuesta: "Rusia" 
  },
  { 
    id: 28, 
    pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?", 
    opciones: ["1939", "1945", "1914"], 
    respuesta: "1939" 
  },
  { 
    id: 29, 
    pregunta: "¿Cuál es la moneda oficial de Estados Unidos?", 
    opciones: ["Euro", "Dólar", "Libra"], 
    respuesta: "Dólar" 
  },
  { id: 30, volverCasilla27: 27 },
  { id: 31, tirarOtraVez: true },
  { 
    id: 32, 
    pregunta: "¿Qué órgano del cuerpo humano bombea la sangre?", 
    opciones: ["Pulmón", "Cerebro", "Corazón"], 
    respuesta: "Corazón" 
  },
  { 
    id: 33, 
    pregunta: "¿Cuál es la montaña más alta del mundo?", 
    opciones: ["Everest", "K2", "Aconcagua"], 
    respuesta: "Everest" 
  },
  { 
    id: 34, 
    pregunta: "¿Cuántos lados tiene un triángulo?", 
    opciones: ["3", "4", "5"], 
    respuesta: "3" 
  },
  { 
    id: 35, 
    pregunta: "¿Cuál es el símbolo químico del oro?", 
    opciones: ["Ag", "Au", "Cu"], 
    respuesta: "Au" 
  },
  { 
    id: 36, 
    pregunta: "¿De qué color es una esmeralda?", 
    opciones: ["Rojo", "Azul", "Verde"], 
    respuesta: "Verde" 
  }
];
let casillas = `<div class="fichas-container">
                <div class="jugador1"></div>
                <div class="jugador2"></div> 
            </div>`;

// Como Tablero es un array simple de objetos, solo necesitamos un bucle for
for (let i = 0; i < Tablero.length; i++) {
    let casillaActual = Tablero[i];
    
    // Usamos .id para obtener el número de la casilla
    casillas += `<div data-id="${casillaActual.id}" class="Casillas">${casillaActual.id}</div>`;
}

document.querySelector("#tablero").innerHTML = casillas; 

document.querySelector(".dadoA").disabled = true;
document.querySelector(".dadoB").disabled = true;
//Nota: todas las casillas que no sean especiales son preguntas

//Tirar dado
function TirarDadoA(){
    jugadores[0].NumeroDado = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dadoA").disabled = true;
    partida.push("Jugador A saco: " + jugadores[0].NumeroDado)
    CalcularCasillaA(jugadores[0].NumeroDado)
}
//Calcular casilla
function CalcularCasillaA(NumeroTirada){
  let casillaActual = jugadores[0].Casilla;
  let resultadoA = casillaActual + NumeroTirada;
  console.log ("RESULTADOA: " + resultadoA)
  partida.push("El jugadorA ha caido en la casilla: " + resultadoA)
  jugadores[0].Casilla = resultadoA

  if(Tablero[resultadoA].pregunta){
    let divPregunta = `<h2>${Tablero[resultadoA].pregunta}</h2>
                  <button id="button-1">${Tablero[resultadoA].opciones[0]}</button>
                  <button id="button-2">${Tablero[resultadoA].opciones[1]}</button>
                  <button id="button-3">${Tablero[resultadoA].opciones[2]}</button>
                  `
    document.querySelector(".pregunta-container").innerHTML = divPregunta
    let btn1 = document.querySelector("#button-1")
    let btn2 = document.querySelector("#button-2")
    let btn3 = document.querySelector("#button-3")
    document.querySelector(".pregunta-container").classList.remove("ocultar")

    btn1.addEventListener("click", function(){
      if(Tablero[resultadoA].respuesta == Tablero[resultadoA].opciones[0]){
        console.log("bien")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoB()

      }else{
        console.log("mal")
        partida.push("PENALIZACION")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoB()
      }
    })

    btn2.addEventListener("click", function(){
      if(Tablero[resultadoA].respuesta == Tablero[resultadoA].opciones[1]){
        console.log("bien")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoB()

      }else{
        console.log("mal")
        partida.push("PENALIZACION")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoB()
      }
    })

    btn3.addEventListener("click", function(){
      if(Tablero[resultadoA].respuesta == Tablero[resultadoA].opciones[2]){
        console.log("bien")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoB()

      }else{
        console.log("mal")
        partida.push("PENALIZACION")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoB()
      }
    }) 

    
  }else{
    let casilla = Tablero[resultadoA];

    switch (true) {
        case casilla.hasOwnProperty("saltarCasilla"):
            jugadores[0].Casilla = casilla.saltarCasilla;
            partida.push("Jugador A salta a la casilla: " + casilla.saltarCasilla);
            break;

        case casilla.hasOwnProperty("pierdeTurno"):
            partida.push("Jugador A pierde el turno");
            // Agrega aquí tu lógica de pérdida de turno si la tienes
            break;

        case casilla.hasOwnProperty("volverCasillaInicio"):
            jugadores[0].Casilla = casilla.volverCasillaInicio;
            partida.push("Jugador A vuelve a la casilla de inicio");
            break;

        case casilla.hasOwnProperty("avanzarDosCasillas"):
            jugadores[0].Casilla += 2;
            partida.push("Jugador A avanza dos casillas extra");
            break;

        case casilla.hasOwnProperty("malaSuerte"):
            jugadores[0].Casilla = casilla.malaSuerte;
            partida.push("¡Mala suerte! Jugador A retrocede a la casilla: " + casilla.malaSuerte);
            break;

        case casilla.hasOwnProperty("volverCasilla27"):
            jugadores[0].Casilla = casilla.volverCasilla27;
            partida.push("Jugador A regresa a la casilla 27");
            break;

        case casilla.hasOwnProperty("tirarOtraVez"):
            partida.push("¡Jugador A puede tirar otra vez!");

            break;

        default:

            break;
    }
    document.querySelector(".pregunta-container").classList.add("ocultar")
    
  }
  EstadoTurnoB()
}
  

function TirarDadoB(){
    jugadores[1].NumeroDado = Math.floor(Math.random() * 6) + 1
    document.querySelector(".dadoB").disabled = true;
    partida.push("Jugador B saco: " + jugadores[1].NumeroDado)
    CalcularCasillaB(jugadores[1].NumeroDado)
}
//Calcular casilla
function CalcularCasillaB(NumeroTirada){
  let casillaActual = jugadores[1].Casilla;
  let resultadoB = casillaActual + NumeroTirada;
  console.log ("RESULTADOB: " + resultadoB)
  partida.push("El jugadorB ha caido en la casilla: " + resultadoB)
  jugadores[1].Casilla = resultadoB
  if(Tablero[resultadoB].pregunta){
    let divPregunta = `<h2>${Tablero[resultadoB].pregunta}</h2>
                     <button id="button-1-b">${Tablero[resultadoB].opciones[0]}</button>
                     <button id="button-2-b">${Tablero[resultadoB].opciones[1]}</button>
                     <button id="button-3-b">${Tablero[resultadoB].opciones[2]}</button>
                     `
    document.querySelector(".pregunta-container").innerHTML = divPregunta
    let btn1 = document.querySelector("#button-1-b")
    let btn2 = document.querySelector("#button-2-b")
    let btn3 = document.querySelector("#button-3-b")
    document.querySelector(".pregunta-container").classList.remove("ocultar")

    btn1.addEventListener("click", function(){
      if(Tablero[resultadoB].respuesta == Tablero[resultadoB].opciones[0]){
        console.log("bien")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoA()

      }else{
        console.log("mal")
        partida.push("PENALIZACION")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoA()
      }
    })

    btn2.addEventListener("click", function(){
      if(Tablero[resultadoB].respuesta == Tablero[resultadoB].opciones[1]){
        console.log("bien")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoA()

      }else{
        console.log("mal")
        partida.push("PENALIZACION")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoA()
      }
    })

    btn3.addEventListener("click", function(){
      if(Tablero[resultadoB].respuesta == Tablero[resultadoB].opciones[2]){
        console.log("bien")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoA()

      }else{
        console.log("mal")
        partida.push("PENALIZACION")
        document.querySelector(".pregunta-container").classList.add("ocultar")
        EstadoTurnoA()
      }
    }) 

  } else {
    let casilla = Tablero[resultadoB];

    switch (true) {
        case casilla.hasOwnProperty("saltarCasilla"):
            jugadores[0].Casilla = casilla.saltarCasilla;
            partida.push("Jugador A salta a la casilla: " + casilla.saltarCasilla);
            break;

        case casilla.hasOwnProperty("pierdeTurno"):
            partida.push("Jugador A pierde el turno");
            // Agrega aquí tu lógica de pérdida de turno si la tienes
            break;

        case casilla.hasOwnProperty("volverCasillaInicio"):
            jugadores[0].Casilla = casilla.volverCasillaInicio;
            partida.push("Jugador A vuelve a la casilla de inicio");
            break;

        case casilla.hasOwnProperty("avanzarDosCasillas"):
            jugadores[0].Casilla += 2;
            partida.push("Jugador A avanza dos casillas extra");
            break;

        case casilla.hasOwnProperty("malaSuerte"):
            jugadores[0].Casilla = casilla.malaSuerte;
            partida.push("¡Mala suerte! Jugador A retrocede a la casilla: " + casilla.malaSuerte);
            break;

        case casilla.hasOwnProperty("volverCasilla27"):
            jugadores[0].Casilla = casilla.volverCasilla27;
            partida.push("Jugador A regresa a la casilla 27");
            break;

        case casilla.hasOwnProperty("tirarOtraVez"):
            partida.push("¡Jugador A puede tirar otra vez!");

            break;

        default:

            break;
    }
    document.querySelector(".pregunta-container").classList.add("ocultar")
  }
  
  EstadoTurnoA()
}

//Estado del juego
function EstadoInicio(){
  partida.push("Inicio")
  document.querySelector(".boton-iniciar").remove()
  EstadoTurnoA()
  console.log(partida)
}
function EstadoTurnoA(){
  partida.push("----|TurnoA|----")
  let arrayJson = JSON.stringify(partida);
  document.querySelector(".actividad").textContent = arrayJson;
  console.log(partida)
  document.querySelector(".dadoA").disabled = false;
}
function EstadoTurnoB(){
  partida.push("----|TurnoB|----")
  let arrayJson = JSON.stringify(partida, null, 2);
  document.querySelector(".actividad").textContent = arrayJson;
  console.log(partida)
  document.querySelector(".dadoB").disabled = false;
}

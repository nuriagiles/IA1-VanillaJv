/*DATOS DE LA PARTIDA*/
//Datos de jugadores 
const jugadores = [
  {
    Nombre: "Default1",
    position: { PositionX: 0, PositionY: 0 },
    Ficha: 1
  },
  {
    Nombre: "Default2",
    position: { PositionX: 0, PositionY: 0 },
    Ficha: 2
  }
];
//Estados de juego
let estat = ["inici", "turnoA", "turnoB", "final"];

/*Tablero*/
const Tablero = [
    [1, 2, 3, 4, 5, 6], 
    [7, 8, 9, 10, 11, 12], 
    [13, 14, 15, 16, 17, 18], 
    [19, 20, 21, 22, 23, 24], 
    [25, 26, 27, 28, 29, 30], 
    [31, 32, 33, 34, 35, 36]
]
let casillas = ""

for (let i = 0; i < Tablero.length; i++) {
    // CORRECCIÓN: Usar Tablero[i].length en lugar de Tablero[l].length
    for (let l = 0; l < Tablero[i].length; l++) { 
        casillas += `<div data-id="${Tablero[i][l]}" class="Casillas">${Tablero[i][l]}</div>`;
    }
}

document.querySelector("#tablero").innerHTML = casillas; 

//Nota: todas las casillas que no sean especiales son preguntas

//Tirar dado
function TirarDado(){
    console.log(Math.floor(Math.random() * 6) + 1)
}



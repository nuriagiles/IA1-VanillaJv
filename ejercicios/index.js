let nomJugador = "Nuria";
const MAX_TIRADES = 5;

let boton = document.querySelector("#btn");
let boton2 = document.querySelector("#btn2");
let boton3 = document.querySelector("#btn3");
let boton4 = document.querySelector("#btn4");
let boton5 = document.querySelector("#btn5");
let boton6 = document.querySelector("#btn6");

let div1 = document.querySelector("#pregunta1");
let div2 = document.querySelector("#pregunta2");
let div3 = document.querySelector("#pregunta3");

let a = 5;
let b = 10;
let cont = -1;
let turno = 0;


let estat = ["inici", "turnoA", "turnoB", "final"];
const caselles = ["Start", "Poble", "Pont", "Casa", "Bosc", "Mola", "Final"];
const objetos = [
    {pregunta: "Cual es la capital de España"}, 
    {respuestas: ["Madrid", "Valencia", "Barcelona"]}, 
    {Correcta: "Madrid"}
]

const caselles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//Mostramos por consola el nombre del jugador y el número máximo de tiradas
console.log(nomJugador);
console.log(MAX_TIRADES);


/*EVENTOS*/
//Creamos un addeventListener para el botón que muestre en un div el resultado de la suma de la funcion anterior
boton.addEventListener("click", function() {
    console.log(a+b);
    document.querySelector("#resultado").innerHTML = a + b;
})

boton2.addEventListener("click", function() {
    console.log(b*a);
    document.querySelector("#resultado2").innerHTML = a * b;
})

boton3.addEventListener("click", function(){
    let ValorIntroducidos = document.querySelector("#input").value;

    console.log("VALOR INTRODUCIDO POR EL USUARIO: " + ValorIntroducidos);

    if(ValorIntroducidos > 10 || ValorIntroducidos < 0){
        let valores = 
            ValorIntroducidos > 10 ?"El número ha de ser més petit que 11" 
            : "El número ha de ser més gran que 0"

        console.log(valores)
        
    }else{

        for (let tablas = 0; tablas < 11; tablas++){
            console.log(ValorIntroducidos * tablas)

        }
    }
})

boton4.addEventListener("click", function(){
    cont++
    console.log("Estado actual: " + estat[cont])
    switch(estat[cont]){
        case "inici":
            console.log("El juego ha comenzado");
            break;
        case "turnoA":
            console.log("Turno del jugador A");
            break;      
        case "turnoB":
            console.log("Turno del jugador B");
            break;
        case "final":
            console.log("El juego ha terminado");
            cont = -1;
            break;
        default:
            console.log("Estado desconocido");
    }
})

let dom = document.querySelector("#caja1");
dom.textContent = "Este es el contenido de la caja 1";
dom.classList.add("rojo");
//cambia de color ante cada click
dom.addEventListener("click", function(){
    dom.classList.toggle("rojo");
    dom.classList.toggle("amarillo");
})


boton5.addEventListener("click", function(){

    if(turno === 0 || turno === 1){
        turno++
    }else{
        turno--
    }

    console.log("Turno del jugador: " + estat[turno]);

    let tirada = Math.floor(Math.random() * 6) + 1;
    console.log("Tirada del dado: " + tirada);

    const nomCasella = caselles[tirada]
    console.log("El jugador ha caído en la casilla: " + nomCasella);
})

boton6.addEventListener("click", function(event){
    event.preventDefault();
    let nombreJugador = document.querySelector("#nombre").value;
    console.log("Nombre del jugador 1: " + nombreJugador);
})


div1.addEventListener("click", function(){
    if(div1.textContent == objetos[2].Correcta){
        console.log("Correcto!")
    }else{
        console.log("Incorrecto!")
    }
})
div2.addEventListener("click", function(){
    if(div2.textContent == objetos[2].Correcta){
        console.log("Correcto!")
    }else{
        console.log("Incorrecto!")
    }
})

div3.addEventListener("click", function(){
    if(div3.textContent == objetos[2].Correcta){
        console.log("Correcto!")
    }else{
        console.log("Incorrecto!")
    }
})

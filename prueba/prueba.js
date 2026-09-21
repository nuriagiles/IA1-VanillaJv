let jugadors = ["Anna", "Joan", "Maria", "Carlos"]
let estadistiquesJugador = {
  punts: 1500,
  nivell: 5,
  tempsJoc: "2h 30m",
  victories: 12,
};
let jugador = {
  nom: "Joan",
  nivell: 3,
  punts: 750,
  equipament: {
    arma: "espasa llarga",
    armadura: "cuir",
    accessori: "anell de poder",
    colores: [
        {transparencia: 0.8}, 
        {color: "rojo"}
    ]
  },
  habilitats: ["atac", "defensa", "magia"],
};

let esAdmin = true;

let botonAdmin = esAdmin?"<button>ADMIN</button>" : " ";
let miDiv = `<div> admin ${botonAdmin}</div>`;

document.querySelector("#container").innerHTML = miDiv

console.log("\n👥 Llista de jugadors:");
for(let jugador of jugadors){
    console.log(`-${jugador}`)
}


console.log("\n📊 Estadístiques del jugador:");
for (let propietat in estadistiquesJugador) {
  console.log(`${propietat}: ${estadistiquesJugador[propietat]}`);
}


//estadistiquesJugador[propietat] Array literales 

function saluda(nombre = "Por defecto"){
    return `Hola ${nombre}`
}

console.log(saluda("pepe"))
console.log(saluda())

let Si = document.querySelectorAll(".alerta")
let miElemento = document.querySelector(".alerta")

console.log(Si)
console.log(miElemento.classList.contains("primero"))

document.querySelector("#Carlos").innerHTML = "<p>Que elegante</p>"
document.querySelector("#Carlos").outerHTML = "<p>Hola</p>"

//Un boton que aparezca y desaparezca un elemento
let btn = document.querySelector("#btn-boom")
let div = document.querySelector("#div")

btn.addEventListener("click", function(){
    div.classList.toggle("novisible");

})
let nomJugador = "Anna";
const MAX_TIRADES = 5;

let boton = document.querySelector("#btn");
let boton2 = document.querySelector("#btn2");
let boton3 = document.querySelector("#btn3");

let a = 5;
let b = 10;


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
    let ValorIntroducidos = document.getElementById("#input").value

    if(ValorIntroducidos > 10 || ValorIntroducidos < 0){
        let Comparar =
            ValorIntroducidos>10
            ? ""
    }else{


    }

})



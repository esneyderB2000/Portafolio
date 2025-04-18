
// aca iniciamos o creamos las variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempoRegresivoId = null;

//apuntando a documento html
let mostrarMovimientos = document.getElementById(`movimientos`);
let mostarAciertos = document.getElementById(`aciertos`);
let mostrarTiempo = document.getElementById(`t-restante`);

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

numeros = numeros.sort(() => {return Math.random() - 0.5});
console.log(numeros);

//funciones
function contarTiempo(){
    tiempoRegresivoId = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = (`Tiempo: ${timer} segundos`);
        if (timer == 0){
            clearInterval (tiempoRegresivoId);
            bloquearTarjetas();
        }
    }, 1000);
}

function bloquearTarjetas(){
    for (let i = 0; i <= 15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./JuegoIMG/${numeros[i]}.png" alt"planeta">`;
        tarjetaBloqueada.disable = true;
    }
}

//funcion principal
function destapar(id){
    if (temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);{
        if(tarjetasDestapadas == 1){

        //mostrar primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="./JuegoIMG/${primerResultado}.png" alt"planeta">`;

        //deshabilitamos primer boton
        tarjeta1.disable = true;
        }
        else if (tarjetasDestapadas == 2){

            //mostar segundo numero
            tarjeta2 = document.getElementById(id);
            segundoResultado = numeros[id];
            tarjeta2.innerHTML = `<img src="./JuegoIMG/${segundoResultado}.png" alt"planeta">`;

            //deshabilitar numero dos
            tarjeta2.disable = true;

            //incrementar movimientos
            movimientos++;
            mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
            if (primerResultado == segundoResultado){

                //encerrar contador tarjetas detapadas
                tarjetasDestapadas = 0;

                //aumentar aciertos
                aciertos ++;
                mostarAciertos.innerHTML = `Aciertos: ${aciertos}`;
                if (aciertos == 8){
                    clearInterval(tiempoRegresivoId);
                    mostarAciertos.innerHTML = `Aciertos: ${aciertos}`;
                    mostrarTiempo.innerHTML = `FELICIDADES!! solo te demoraste ${timerInicial - timer} segundos`;
                    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
                }
            }
            else {
                //mostar momentanea mente valores y taparlos
                setTimeout(() => {
                    tarjeta1.innerHTML = ` `;
                    tarjeta2.innerHTML = ` `;
                    tarjeta1.disable = false;
                    tarjeta2.disable = false;
                    tarjetasDestapadas = 0;
                }, 800);
            }
        }
    }
}
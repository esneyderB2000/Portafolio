const contenedor = document.querySelector (".flex-container");
const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();

function crearLlave (nombre,modelo,precio){
    img = `<img src="https://assaabloymx.files.wordpress.com/2013/07/llave_antigua.jpg?w=300&h=225">`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const changeHidden = (number)=>{
    document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();

for (var i = 0; i <= 20; i++){
    let modeloRanbom = Math.round(Math.random()*10000);
    let precioRanbom = Math.round(Math.random()*10+30);
    let llave = crearLlave (`Llave ${i}`, `modelo ${modeloRanbom}`,precioRanbom);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=>{changeHidden(modeloRanbom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}


contenedor.appendChild(documentFragment);
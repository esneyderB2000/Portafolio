window.addEventListener("scroll", function () {
  const boton = document.getElementById("botonArriba");
  if (window.scrollY > 150) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
});

function scrollArriba() {
  const velocidad = 10;
  const desplazamiento = window.scrollY;
  const intervalo = setInterval(() => {
    if (window.scrollY > 0) {
      window.scrollTo(0, window.scrollY - desplazamiento / 50);
    } else {
      clearInterval(intervalo);
    }
  }, velocidad);
}

function scrollAbajo(event) {
  event.preventDefault();
  
  const destino0 = document.querySelector("#sobre-mi");
  const destino1 = document.querySelector("#proyectos");
  const destino2 = document.querySelector("#contactame");

  destino0.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'
  });

  destino1.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'
  });

  destino2.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'
  });
}
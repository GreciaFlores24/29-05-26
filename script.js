// =====================================
// ETAPA 1
// =====================================

const nombre =
  document.getElementById("nombre");

const contador =
  document.getElementById("contador");

const zona =
  document.getElementById("zona");

const precio =
  document.getElementById("precio");

const formCompra =
  document.getElementById("formCompra");


// EVENTO INPUT
nombre.addEventListener("input", () => {

  let cantidad =
    nombre.value.length;

  contador.textContent =
    cantidad + "/20 caracteres";

  if (cantidad > 20) {

    contador.style.color = "red";

  } else {

    contador.style.color = "white";

  }

});


// EVENTO CHANGE
zona.addEventListener("change", () => {

  precio.textContent =
    "$" + zona.value;

});


// EVENTO CLICK
formCompra.addEventListener("submit", (event) => {

  event.preventDefault();

  if (nombre.value.trim() === "") {

    alert("El nombre está vacío");

  } else {

    alert("Compra realizada");

  }

});



// =====================================
// ETAPA 2
// =====================================

const botones =
  document.querySelectorAll(".efecto");

const pantalla =
  document.getElementById("pantalla");

const distorsion =
  document.getElementById("distorsion");

const nivel =
  document.getElementById("nivel");


// EVENTO CLICK BOTONES
botones.forEach((boton) => {

  boton.addEventListener("click", () => {

    botones.forEach((b) => {

      b.style.backgroundColor = "";
      b.style.color = "white";

    });

    boton.style.backgroundColor = "yellow";
    boton.style.color = "black";

    pantalla.textContent =
      "Reproduciendo: " +
      boton.textContent;

  });

});


// EVENTO INPUT RANGE
distorsion.addEventListener("input", () => {

  nivel.textContent =
    "Nivel de Distorsión: " +
    distorsion.value +
    "%";

});



// =====================================
// ETAPA 3
// =====================================

const busqueda =
  document.getElementById("busqueda");

const equipos =
  document.querySelectorAll(".equipo");


// EVENTO INPUT BUSCADOR
busqueda.addEventListener("input", () => {

  let texto =
    busqueda.value.toLowerCase();

  equipos.forEach((equipo) => {

    let nombreEquipo =
      equipo.textContent.toLowerCase();

    if (nombreEquipo.includes(texto)) {

      equipo.style.display = "block";

    } else {

      equipo.style.display = "none";

    }

  });

});


// EVENTO CLICK EQUIPOS
equipos.forEach((equipo) => {

  equipo.addEventListener("click", () => {

    equipo.style.color = "lime";

    equipo.style.textDecoration =
      "line-through";

  });

});
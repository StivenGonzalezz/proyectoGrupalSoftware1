let idActual = null;

function cargarOrden() {
  const id = parseInt(document.getElementById("idOrden").value);
  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const orden = ordenes.find(o => o.id === id);

  if (!orden) {
    alert("Orden no encontrada.");
    return;
  }

  idActual = id;

  document.getElementById("cliente").value = orden.cliente;
  document.getElementById("cedula").value = orden.cedula;
  document.getElementById("telefono").value = orden.telefono;
  document.getElementById("marca").value = orden.marca;
  document.getElementById("serie").value = orden.serie;
  document.getElementById("accesorios").value = orden.accesorios;
  document.getElementById("detalles").value = orden.detalles;
}

function actualizarOrden(e) {
  e.preventDefault();

  if (idActual === null) {
    alert("Primero busca una orden.");
    return;
  }

  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const index = ordenes.findIndex(o => o.id === idActual);

  if (index === -1) {
    alert("Orden no encontrada.");
    return;
  }

  ordenes[index] = {
    ...ordenes[index], 
    cliente: document.getElementById("cliente").value,
    cedula: document.getElementById("cedula").value,
    telefono: document.getElementById("telefono").value,
    marca: document.getElementById("marca").value,
    serie: document.getElementById("serie").value,
    accesorios: document.getElementById("accesorios").value,
    detalles: document.getElementById("detalles").value,
  };

  localStorage.setItem("ordenes", JSON.stringify(ordenes));
  alert("Orden actualizada correctamente.");
}

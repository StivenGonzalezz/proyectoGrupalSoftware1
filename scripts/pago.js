let ordenConsultada = null;

function consultarOrden() {
  const id = parseInt(document.getElementById("idOrdenPago").value);

  if (isNaN(id)) {
    alert("Por favor ingresa un ID válido.");
    return;
  }

  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const orden = ordenes.find(o => o.id === id);

  if (!orden) {
    alert("Orden no encontrada.");
    document.getElementById("infoOrden").style.display = "none";
    return;
  }

  if (!orden.valorMantenimiento) {
    alert("Esta orden no tiene un valor de mantenimiento asignado.");
    document.getElementById("infoOrden").style.display = "none";
    return;
  }

  ordenConsultada = orden;
  document.getElementById("valorMostrar").innerText = orden.valorMantenimiento.toFixed(2);
  document.getElementById("infoOrden").style.display = "block";
}

function realizarPago() {
  if (!ordenConsultada) {
    alert("Primero consulta una orden válida.");
    return;
  }

  // Aquí se podría agregar lógica real de pago, pero para este caso solo simulamos
  alert(`Pago realizado correctamente por $${ordenConsultada.valorMantenimiento.toFixed(2)} para la orden ID ${ordenConsultada.id}.`);

  // Opcional: marcar orden como "pagada"
  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const index = ordenes.findIndex(o => o.id === ordenConsultada.id);
  if (index !== -1) {
    ordenes[index].pagado = true;
    localStorage.setItem("ordenes", JSON.stringify(ordenes));
  }

  ordenConsultada = null;
  document.getElementById("infoOrden").style.display = "none";
  document.getElementById("idOrdenPago").value = '';
}

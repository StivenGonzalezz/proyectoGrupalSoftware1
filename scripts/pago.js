let ordenConsultada = null;

function mostrarAlerta(tipo, mensaje) {
  const alertContainer = document.getElementById("alertContainer");
  let colorFondo = "#222", borde = "#888", texto = "white";

  if (tipo === "success") {
    colorFondo = "#1e3d1e";
    borde = "#4caf50";
    texto = "#b4f2b4";
  } else if (tipo === "danger") {
    colorFondo = "#4d1a1a";
    borde = "#ff4d4d";
    texto = "#ffcccc";
  } else if (tipo === "warning") {
    colorFondo = "#3c2c00";
    borde = "#ffcc00";
    texto = "#ffe680";
  }

  alertContainer.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show mt-3" role="alert" 
         style="background-color: ${colorFondo}; border: 1px solid ${borde}; color: ${texto};">
      ${mensaje}
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
  `;
  alertContainer.style.display = "block";
}

function consultarOrden() {
  const id = parseInt(document.getElementById("idOrdenPago").value);

  document.getElementById("infoOrden").style.display = "none";
  document.getElementById("valorMostrar").innerText = "0";
  ordenConsultada = null;

  if (isNaN(id)) {
    mostrarAlerta("warning", "⚠️ Por favor ingresa un ID válido.");
    return;
  }

  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const orden = ordenes.find(o => o.id === id);

  if (!orden) {
    mostrarAlerta("danger", "❌ Orden no encontrada.");
    return;
  }

  if (!orden.valorMantenimiento) {
    mostrarAlerta("warning", "⚠️ Esta orden no tiene un valor de mantenimiento asignado.");
    return;
  }

  ordenConsultada = orden;
  document.getElementById("valorMostrar").innerText = orden.valorMantenimiento.toFixed(2);
  document.getElementById("infoOrden").style.display = "block";
}

function realizarPago() {
  if (!ordenConsultada) {
    mostrarAlerta("warning", "⚠️ Primero consulta una orden válida.");
    return;
  }

  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const index = ordenes.findIndex(o => o.id === ordenConsultada.id);
  if (index !== -1) {
    ordenes[index].pagado = true;
    localStorage.setItem("ordenes", JSON.stringify(ordenes));
  }

  mostrarAlerta("success", `💵 Pago realizado correctamente por $${ordenConsultada.valorMantenimiento.toFixed(2)} para la orden ID ${ordenConsultada.id}.`);

  ordenConsultada = null;
  document.getElementById("infoOrden").style.display = "none";
  document.getElementById("idOrdenPago").value = "";
}

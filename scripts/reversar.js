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

function reversarPago() {
  const id = parseInt(document.getElementById("idOrden").value);

  if (isNaN(id)) {
    mostrarAlerta("warning", "⚠️ Por favor ingresa un ID válido.");
    return;
  }

  let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const index = ordenes.findIndex(orden => orden.id === id);

  if (index === -1) {
    mostrarAlerta("danger", "❌ Orden no encontrada.");
    return;
  }

  if (!ordenes[index].pagado) {
    mostrarAlerta("warning", "⚠️ La orden ya está marcada como NO PAGADA.");
    return;
  }

  ordenes[index].pagado = false;
  localStorage.setItem("ordenes", JSON.stringify(ordenes));

  mostrarAlerta("success", `🔄 Pago reversado correctamente para la orden #${id}.`);

  // limpiar campo
  document.getElementById("idOrden").value = "";
}

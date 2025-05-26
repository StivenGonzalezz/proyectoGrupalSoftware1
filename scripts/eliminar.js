let ordenSeleccionada = null;

function buscarParaEliminar() {
  const id = parseInt(document.getElementById("idEliminar").value);
  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const orden = ordenes.find(o => o.id === id);

  if (!orden) {
    alert("Orden no encontrada.");
    return;
  }

  ordenSeleccionada = orden;

  // Mostrar datos en el modal
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <p><strong>ID:</strong> ${orden.id}</p>
    <p><strong>Cliente:</strong> ${orden.cliente}</p>
    <p><strong>Cédula:</strong> ${orden.cedula}</p>
    <p><strong>Teléfono:</strong> ${orden.telefono}</p>
    <p><strong>Marca:</strong> ${orden.marca}</p>
    <p><strong>Serie:</strong> ${orden.serie}</p>
    <p><strong>Accesorios:</strong> ${orden.accesorios}</p>
    <p><strong>Detalles:</strong> ${orden.detalles}</p>
  `;

  const modal = new bootstrap.Modal(document.getElementById("modalEliminar"));
  modal.show();
}

function confirmarEliminacion() {
  if (!ordenSeleccionada) return;

  let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  ordenes = ordenes.filter(o => o.id !== ordenSeleccionada.id);
  localStorage.setItem("ordenes", JSON.stringify(ordenes));

  // Ocultar el modal
  const modal = bootstrap.Modal.getInstance(document.getElementById("modalEliminar"));
  modal.hide();

  // Limpiar input
  document.getElementById("idEliminar").value = "";

  // Mostrar alerta
  const alertContainer = document.getElementById("alertContainer");
  alertContainer.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" 
         style="background-color: #4d1a1a; border: 1px solid #ff4d4d; color: #ffcccc;">
      ❌ Orden eliminada exitosamente.
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
  `;
  alertContainer.style.display = 'block';

  ordenSeleccionada = null;
}

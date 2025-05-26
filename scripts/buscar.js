// Cargar todas las órdenes al cargar la página
window.onload = function () {
  const tbody = document.querySelector("#tabla-ordenes tbody");
  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];

  ordenes.forEach((orden) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${orden.id}</td>
      <td>${orden.cliente}</td>
      <td>${orden.telefono}</td>
      <td>${orden.marca}</td>
      <td>${orden.pagado ? "Sí" : "No"}</td>
      <td>$${orden.valorMantenimiento}</td>
    `;
    tbody.appendChild(fila);
  });
};

function buscarOrden() {
  const id = parseInt(document.getElementById("buscarId").value);
  const ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const orden = ordenes.find((o) => o.id === id);

  if (orden) {
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
      <p><strong>Pagado:</strong> ${orden.pagado ? "Sí" : "No"}</p>
      <p><strong>Valor Mantenimiento:</strong> $${orden.valorMantenimiento}</p>
      <p><strong>Fecha:</strong> ${new Date(orden.fechaCreacion).toLocaleString()}</p>
    `;

    const modal = new bootstrap.Modal(document.getElementById("modalOrden"));
    modal.show();
  } else {
    alert("Orden no encontrada.");
  }
}

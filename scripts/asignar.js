function asignarValor() {
  const id = parseInt(document.getElementById("idOrden").value);
  const valor = parseFloat(document.getElementById("valorMto").value);

  const alertContainer = document.getElementById("alertContainer");
  alertContainer.innerHTML = "";
  alertContainer.style.display = "none";

  if (isNaN(id) || isNaN(valor)) {
    alertContainer.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert" 
           style="background-color: #3c2c00; border: 1px solid #ffcc00; color: #ffe680;">
        ⚠️ Por favor ingresa valores válidos.
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>
    `;
    alertContainer.style.display = "block";
    return;
  }

  let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
  const index = ordenes.findIndex(o => o.id === id);

  if (index === -1) {
    alertContainer.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert" 
           style="background-color: #4d1a1a; border: 1px solid #ff4d4d; color: #ffcccc;">
        ❌ Orden no encontrada.
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Cerrar"></button>
      </div>
    `;
    alertContainer.style.display = "block";
    return;
  }

  ordenes[index].valorMantenimiento = valor;
  localStorage.setItem("ordenes", JSON.stringify(ordenes));

  alertContainer.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" 
         style="background-color: #1e3d1e; border: 1px solid #4caf50; color: #b4f2b4;">
      💰 Valor de mantenimiento asignado correctamente a la orden ID <strong>${id}</strong>.
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
  `;
  alertContainer.style.display = "block";

  document.getElementById("idOrden").value = "";
  document.getElementById("valorMto").value = "";
}

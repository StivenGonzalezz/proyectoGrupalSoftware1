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
      alert(`
  ID: ${orden.id}
  Cliente: ${orden.cliente}
  Cédula: ${orden.cedula}
  Teléfono: ${orden.telefono}
  Marca: ${orden.marca}
  Serie: ${orden.serie}
  Accesorios: ${orden.accesorios}
  Detalles: ${orden.detalles}
  Pagado: ${orden.pagado ? "Sí" : "No"}
  Valor Mantenimiento: $${orden.valorMantenimiento}
  Fecha: ${new Date(orden.fechaCreacion).toLocaleString()}
      `);
    } else {
      alert("Orden no encontrada.");
    }
  }
  
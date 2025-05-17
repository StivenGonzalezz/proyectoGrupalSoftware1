function eliminarOrden() {
    const id = parseInt(document.getElementById("idEliminar").value);
    let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    const index = ordenes.findIndex(o => o.id === id);
  
    if (index === -1) {
      alert("Orden no encontrada.");
      return;
    }
  
    const eliminada = ordenes.splice(index, 1)[0];
    localStorage.setItem("ordenes", JSON.stringify(ordenes));
  
    alert(
      `Orden eliminada:\n\n` +
      `ID: ${eliminada.id}\n` +
      `Cliente: ${eliminada.cliente}\n` +
      `Cédula: ${eliminada.cedula}\n` +
      `Teléfono: ${eliminada.telefono}\n` +
      `Marca: ${eliminada.marca}\n` +
      `Serie: ${eliminada.serie}\n` +
      `Accesorios: ${eliminada.accesorios}\n` +
      `Detalles: ${eliminada.detalles}`
    );
  }
  
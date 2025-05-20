function reversarPago() {
    const id = parseInt(document.getElementById("idOrden").value);
  
    if (isNaN(id)) {
      alert("Por favor ingrese un ID válido.");
      return;
    }
  
    let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    const index = ordenes.findIndex(orden => orden.id === id);
  
    if (index === -1) {
      alert("Orden no encontrada.");
      return;
    }
  
    if (!ordenes[index].pagado) {
      alert("La orden ya está marcada como NO PAGADA.");
      return;
    }
  
    ordenes[index].pagado = false;
    localStorage.setItem("ordenes", JSON.stringify(ordenes));
    alert(`✅ Pago reversado para la orden #${id}`);
  }
  
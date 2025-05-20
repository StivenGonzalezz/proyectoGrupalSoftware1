function asignarValor() {
    const id = parseInt(document.getElementById("idOrden").value);
    const valor = parseFloat(document.getElementById("valorMto").value);
  
    if (isNaN(id) || isNaN(valor)) {
      alert("Por favor ingresa valores válidos.");
      return;
    }
  
    let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];
    const index = ordenes.findIndex(o => o.id === id);
  
    if (index === -1) {
      alert("Orden no encontrada.");
      return;
    }
  
    ordenes[index].valorMantenimiento = valor;
    localStorage.setItem("ordenes", JSON.stringify(ordenes));
  
    alert(`Valor de mantenimiento asignado correctamente a la orden ID ${id}.`);
  }
  
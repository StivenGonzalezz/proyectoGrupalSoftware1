document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let ordenes = JSON.parse(localStorage.getItem('ordenes')) || [];
  
    const orden = {
      id: ordenes.length,
      pagado: false,
      valorMantenimiento: 0,
      cliente: document.getElementById('cliente').value,
      cedula: document.getElementById('cedula').value,
      telefono: document.getElementById('telefono').value,
      marca: document.getElementById('marca').value,
      serie: document.getElementById('serie').value,
      accesorios: document.getElementById('accesorios').value,
      detalles: document.getElementById('detalles').value,
      fechaCreacion: new Date().toISOString()
    };
  
    ordenes.push(orden);
    localStorage.setItem('ordenes', JSON.stringify(ordenes));
  
    alert("Orden creada exitosamente con ID: " + orden.id);
    this.reset();
  });
  
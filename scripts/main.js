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
  this.reset();

  // Mostrar alerta Bootstrap personalizada
  const alertContainer = document.getElementById('alertContainer');
  alertContainer.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" 
         style="background-color: #1e3d1e; border: 1px solid #4caf50; color: #b4f2b4;">
      ✅ Orden creada exitosamente con ID: <strong>${orden.id}</strong>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Cerrar"></button>
    </div>
  `;
  alertContainer.style.display = 'block';
});

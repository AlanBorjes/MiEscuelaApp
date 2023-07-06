let grupos = [];
// La lista de grupos en formato JSON
fetch('../data/grupos.json')
  .then(response => response.json())
  .then(data => {
    grupos = data;
    console.log(data);
    // Obtener la referencia del tbody de la tabla
    var tbody = document.getElementById('grupos-body');
    // Iterar sobre la lista de grupos y crear filas en la tabla
    grupos.forEach(function (grupo) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + grupo.id + '</td>' +
            '<td>' + grupo.cuatrimestre + '</td>' +
            '<td>' + grupo.grupo + '</td>' +
            '<td>' + grupo.generacion + '</td>' +
            '<td>' + grupo.carrera.nombre + '</td>' +
            '<td>' + grupo.jefe_grupo.nombre + ' (' + grupo.jefe_grupo.email + ')' + '</td>' +
            '<td>' + grupo.profesor_tutor.nombre + ' (' + grupo.profesor_tutor.email + ')' + '</td>';
        tbody.appendChild(row);
    });
  })
  .catch(error => {
    // Manejo de errores
    console.error('Ocurrió un error:', error);
  });
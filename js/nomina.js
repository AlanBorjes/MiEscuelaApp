let nominas = [];
fetch('../data/nomina.json')
  .then(response => response.json())
  .then(data => {
    nominas = data;
    console.log(data);
    var tbody = document.getElementById('grupos-body');
    nominas.forEach(function (nomina) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + nomina.id + '</td>' +
            '<td>' + nomina.fecha_pago + '</td>' +
            '<td>' + nomina.profesor.nombre + '</td>' +
            '<td>' + nomina.dias_trabajados + '</td>' +
            '<td>' + nomina.salario + '</td>' +
            '<td>' + nomina.retenciones  + '</td>' +
            '<td>' + nomina.vales_despensa  + '</td>';
        tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Ocurrió un error:', error);
  });
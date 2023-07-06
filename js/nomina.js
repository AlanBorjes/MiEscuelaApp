let nominas = [];
<<<<<<< HEAD
fetch('./data/nomina.json')
=======
fetch('../data/nomina.json')
>>>>>>> 35561d1188fdea70ba83af3f436b9ec7c973e497
  .then(response => response.json())
  .then(data => {
    nominas = data;
    console.log(data);
<<<<<<< HEAD
    var tbody = document.getElementById('nominas-body');
=======
    var tbody = document.getElementById('grupos-body');
>>>>>>> 35561d1188fdea70ba83af3f436b9ec7c973e497
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
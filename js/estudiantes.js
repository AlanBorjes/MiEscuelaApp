
var tabla = document.getElementById("tablaEstudiantes");
var tbody = tabla.getElementsByTagName("tbody")[0];

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var datos = JSON.parse(xhr.responseText);
    generarFilas(datos);
  }
};
xhr.open("GET", "../data/estudiantes.json", true);
xhr.send();
  
function generarFilas(datos) {
  for (var i = 0; i < datos.length; i++) {
    var fila = document.createElement("tr");
    fila.innerHTML = "<td>" + datos[i].id + "</td>" +
                     "<td>" + datos[i].nombre + "</td>" +
                     "<td>" + datos[i].apellido_paterno + "</td>" +
                     "<td>" + datos[i].apellido_materno + "</td>" +
                     "<td>" + datos[i].fecha_nacimiento + "</td>" +
                     "<td>" + datos[i].correo_electronico + "</td>" +
                     "<td>" + datos[i].telefono + "</td>" +
                     "<td>" + datos[i].direccion + "</td>" +
                     "<td>" + datos[i].carrera.nombre + "</td>";
    tbody.appendChild(fila);
  }
}
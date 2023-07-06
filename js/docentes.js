console.log("data")
$.ajax({
    type: "GET",  // Envío con método POST
    url: '/data/docentes.json',  // Fichero destino (el PHP que trata los datos)
}).done(function (data) {  // Función que se ejecuta si todo ha ido bien
    console.log(data)
    var html = "";

    data.forEach(element => {
        var grados = element.grados_academicos;
        var gradosnew = '<ul>';
        var grados2
        console.log(grados);
        grados.forEach(element=>{
            console.log(element);
            grados2 =grados2+ `
            <li>${element.titulo}</li>
          `;
        })
        gradosnew= gradosnew+ grados2+"</ul>"
         html = html +` <tr>  
         <th scope="row">${element.nombre}</th>
         <th scope="row">${element.apellido_paterno} ${element.apellido_materno}</th>
         <th scope="row">${element.fecha_nacimiento}</th>
         <th scope="row">${element.correo_electronico}</th>
         <th scope="row">${element.division_academica.nombre}</th>
         <th scope="row">
        `+gradosnew+`
         </th>

         </tr>`
    });
    var table = document.getElementById("tbody");
    table.innerHTML = html;

}).fail(function (jqXHR, textStatus, errorThrown) {
    $("#consola").html("The following error occured: " + textStatus + " " + errorThrown);
});
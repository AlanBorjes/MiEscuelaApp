(usePromise = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  })('../data/asignaturas.json')
    .then(data => {
      console.log(data)
      let html = ``
    //   document.getElementById("container").innerHTML = html;
    let table = ``
    
    Object.entries(data).forEach(([key, value]) => {
        table += `
        <tr >
        <th>${value.id} </th>
        <th>${value.nombre}</th>
        <th>${value.codigo}</th>
        <th>${value.cuatrimestre}</th>
        <th>${value.seriacion == null ? "NA" : value.seriacion}</th>
        </tr>
        `
    });
    document.getElementById("cuerpo").innerHTML = table;
    })
    .catch(err => console.log(err))
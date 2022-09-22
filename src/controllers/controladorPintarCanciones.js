export function pintarCanciones(canciones){

    let fila = document.getElementById("fila");
      fila.innerHTML = "";

      canciones.tracks.forEach(function (cancion) {

        let columna = document.createElement("div");
        columna.classList.add("col");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "shadow");

        let audio = document.createElement("audio");
        audio.classList.add("w-100");
        audio.setAttribute("controls", "controls");
        audio.src = cancion.preview_url;

        let imagenes = document.createElement("img");
        imagenes.classList.add("img-fluid", "w-100");
        imagenes.src = cancion.album.images[0].url;

        let nombre = document.createElement("name");
        nombre.classList.add("text-center");
        nombre.textContent = "Nombre cancion: " + cancion.name;

        let popularidad = document.createElement("popularidad");
        popularidad.classList.add("text-center");
        popularidad.textContent = "Popularidad: " + cancion.popularity;

        let album = document.createElement("album");
        album.classList.add("text-center");
        album.textContent = "Nombre album: " + cancion.album.name;

        let fecha = document.createElement("fecha");
        fecha.classList.add("text-center");
        fecha.textContent = "Fecha lanzamiento: " + cancion.album.release_date;

        //Padres e hijos
        tarjeta.appendChild(imagenes);
        tarjeta.appendChild(audio);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(album);
        tarjeta.appendChild(popularidad);
        tarjeta.appendChild(fecha);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
      });
}
let URI = "https://api.spotify.com/v1/artists/790FomKkXshlbRYZFtlgla/top-tracks?market=US";


let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()

    let artista=document.getElementById("artista").value
    console.log(artista)

    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`

    const TOKEN = "Bearer BQA4K9bAAKh_hEbe_HI8uQ007QBx9YBCYuzwplJpgJcvg-0_A6tylJMTPJVw-eDJUbLNIZGb5TXWOw5UjaTmMKZYGvvIlhE9UQm18F88geYf-uhs15OKmON85jb7fBqk7Cl-lsqJaGJklbVaZeMeRiiTFIjT6fDq-4NMABJu9VNmPo7ntiYLuHjMwKDRq12ehwUoG74"

    const PETICION = {
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()//garantizo formato json
})
.then(function(respuesta){
    console.log(respuesta)//Hago lo que quiera con respuesta
    console.log(respuesta.tracks)//Accedo a un atributo de la respuesta

    //recorrer un arreglo 
    let fila = document.getElementById("fila")
    fila.innerHTML=""
    respuesta.tracks.forEach(function(cancion){
        // console.log(cancion)
        // console.log(cancion.name)
        // console.log(cancion.preview_url)
        // console.log(cancion.album.images[0].url)
        // console.log(cancion.popularity)
        // console.log(cancion.album.name)
        // console.log(cancion.album.release_date) 

        let columna=document.createElement("div")     
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let imagenes=document.createElement("img")
        imagenes.classList.add("img-fluid","w-100") 
        imagenes.src=cancion.album.images[0].url

        let nombre=document.createElement("name")
        nombre.classList.add("text-center")
        nombre.textContent="Nombre cancion: " +cancion.name

        let popularidad=document.createElement("popularidad")
        popularidad.classList.add("text-center")
        popularidad.textContent="Popularidad: " +cancion.popularity

        let album=document.createElement("album")
        album.classList.add("text-center")
        album.textContent="Nombre album: " +cancion.album.name

        let fecha=document.createElement("fecha")
        fecha.classList.add("text-center")
        fecha.textContent="Fecha lanzamiento: " + cancion.album.release_date



        //Padres e hijos 
        tarjeta.appendChild(imagenes)
        tarjeta.appendChild(audio)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(album)
        tarjeta.appendChild(popularidad)
        tarjeta.appendChild(fecha)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})
.catch(function(respuestaError){
    console.log(respuestaError)
})
})


//RECETA PARA CONSUMIR APIS CON JS PURO 

//1.SI YO QUIERO CONSUMIR UN API 
//DEBO SABER PARA DONDE VOY Y A QUE SERVICIO...
//DEBO CONFIGURAR LA URI 

//2.configuro datos especiales o de control en el servidor


//3.configuro la peticion
//NOTA:solo POST y PUT configuran body 
//para js la peticion es un objeto 


//4. ARRANQUE PUES MIJO 
//CONSUMA EL API 







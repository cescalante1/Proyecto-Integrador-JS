
const tarjetavermas = document.getElementById("card-vermas");




    

const renderbtnvermas = (peli) => {

    const movie = arrayparseado.find(p => p.titulo == peli);
    
    const card = document.createElement('div');
    card.classList.add('card-vermas');




    const contenedortarjeta = document.createElement('div');
    contenedortarjeta.classList.add('contentcard-vermas');


    const imagentarjeta = document.createElement('div');
    imagentarjeta.classList.add('imgcard-vermas');


    const imgcard = document.createElement('img');
    imgcard.setAttribute('src',movie.imagen);
    imgcard.setAttribute('alt',movie.titulo);
    imgcard.classList.add("img-vermas");
    imagentarjeta.appendChild(imgcard);

    const titulopelicula = document.createElement('h2');
    titulopelicula.classList.add('titulovermas');
    const rendertitulopelicula = document.createTextNode(` ${movie.titulo}`);
    titulopelicula.appendChild(rendertitulopelicula);
    contenedortarjeta.appendChild(titulopelicula);
    
    const descripcionpelicula = document.createElement('p');
    descripcionpelicula.classList.add('contentvermas');
    const renderdescpelicula = document.createTextNode(`Descripción: ${movie.descripcion}`);
    descripcionpelicula.appendChild(renderdescpelicula);
    contenedortarjeta.appendChild(descripcionpelicula);

    const añopelicula = document.createElement('p');
    añopelicula.classList.add('contentvermas');
    const renderañopelicula = document.createTextNode(`Año: ${movie.año}`);
    añopelicula.appendChild(renderañopelicula);
    contenedortarjeta.appendChild(añopelicula);

    const generopelicula = document.createElement('p');
    generopelicula.classList.add('contentvermas');
    const rendergenpelicula = document.createTextNode(`Género: ${movie.género}`);
    generopelicula.appendChild(rendergenpelicula);
    contenedortarjeta.appendChild(generopelicula);

    const scorenpelicula = document.createElement('p');
    scorenpelicula.classList.add('contentvermas');
    const renderscorepelicula = document.createTextNode(`Score IMDB: ${movie.score}`);
    scorenpelicula.appendChild(renderscorepelicula);
    contenedortarjeta.appendChild(scorenpelicula);

    const repartopelicula = document.createElement('p');
    repartopelicula.classList.add('contentvermas');
    const renderrepartopelicula = document.createTextNode(`Reparto: ${movie.reparto}`);
    repartopelicula.appendChild(renderrepartopelicula);
    contenedortarjeta.appendChild(repartopelicula);

    const redirvermas =document.createElement('a');
    redirvermas.setAttribute('href','index.html');
    const btnvermas = document.createElement('button');
    btnvermas.classList.add('btn-volver-vermas');
    const renderbtnvermas = document.createTextNode('Volver');
    btnvermas.appendChild(renderbtnvermas);
    redirvermas.appendChild(btnvermas);
    contenedortarjeta.appendChild(redirvermas);


    card.appendChild(imagentarjeta);
    card.appendChild(contenedortarjeta);
    tarjetavermas.appendChild(card);





}



document.addEventListener('DOMContentLoaded', () => {




    const getpelivermas = localStorage.getItem('Pelicula');

    const pelivermasparse = JSON.parse(getpelivermas);

  

    console.log(pelivermasparse);

    renderbtnvermas(`${pelivermasparse}`);
 


   


})





   
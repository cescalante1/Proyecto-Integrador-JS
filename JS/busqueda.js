
const tarjetabusqueda = document.getElementById("container-busqueda");
const main = document.querySelector('main');




    





const renderbtnvermas =  async (peli) => {

    
        try {
            const response = await fetch(`https://www.omdbapi.com/?t=${peli}&apikey=a9f69a44`);
            const data = await response.json();

            const mov = localStorage.setItem('Busqueda', JSON.stringify(data));



    

        } catch (error) {
            return {
                error: 'Hubo un error',

                
            };


        }




    
    const busquedapeli = localStorage.getItem('Busqueda');

    const movie = JSON.parse(busquedapeli);


    
    if(movie.Title === undefined){

        alert("No existe esa película");

        const newsearch = () =>{

        
        
            const card = document.createElement('div');
            card.classList.add('card-newbusqueda');
        
        
            const contenedortarjeta = document.createElement('div');
            contenedortarjeta.classList.add('contentcard-busqueda');
        
            const btnstarjeta = document.createElement('div');
            btnstarjeta.classList.add('btns-busqueda');
        
            const busquedanueva = document.createElement('input');
            busquedanueva.setAttribute('placeholder', "Buscar otra película ");
            busquedanueva.setAttribute('type', "search");
            busquedanueva.classList.add("input-nuevabusqueda");
            contenedortarjeta.appendChild(busquedanueva);
        
            const redirvermas =document.createElement('a');
            redirvermas.setAttribute('href','index.html');
            const btnvermas = document.createElement('button');
            btnvermas.classList.add('btn-volver-busqueda');
            const renderbtnvermas = document.createTextNode('Volver');
            btnvermas.appendChild(renderbtnvermas);
            redirvermas.appendChild(btnvermas);
            btnstarjeta.appendChild(redirvermas);
        
            const newsearch =document.createElement('a');
            newsearch.setAttribute('href','busqueda.html');
            const newsearchbtn = document.createElement('button');
            newsearchbtn.classList.add('btn-volver-busqueda');
            const newsearchbtntext = document.createTextNode('Buscar');
            newsearchbtn.appendChild(newsearchbtntext);
            newsearch.appendChild(newsearchbtn);
            btnstarjeta.appendChild(newsearch);
        
        
            card.appendChild(contenedortarjeta);
            contenedortarjeta.appendChild(btnstarjeta);
            main.appendChild(card);


            while (tarjetabusqueda.firstChild) {
                tarjetabusqueda.removeChild(tarjetabusqueda.firstChild);
            }


            newsearchbtn.addEventListener('click',(e) => {

       
                const busquedapeli = localStorage.setItem('Busqueda', JSON.stringify(busquedanueva.value).toLowerCase());
        
                
            
            
            });
        
        
        
        
        
        }

        newsearch();

        

    }else{

    




    


    const card = document.createElement('div');
    card.classList.add('card-busqueda');



    const contenedortarjeta = document.createElement('div');
    contenedortarjeta.classList.add('contentcard-busqueda');


    const imagentarjeta = document.createElement('div');
    imagentarjeta.classList.add('imgcard-busqueda');


    const imgcard = document.createElement('img');
    imgcard.setAttribute('src',movie.Poster);
    imgcard.setAttribute('alt',movie.Title);
    imgcard.classList.add("img-busqueda");
    imagentarjeta.appendChild(imgcard);

    const titulopelicula = document.createElement('h2');
    titulopelicula.classList.add('titulobusqueda');
    const rendertitulopelicula = document.createTextNode(` ${movie.Title}`);
    titulopelicula.appendChild(rendertitulopelicula);
    contenedortarjeta.appendChild(titulopelicula);
    
    const descripcionpelicula = document.createElement('p');
    descripcionpelicula.classList.add('contentbusqueda');
    const renderdescpelicula = document.createTextNode(`Descripción: ${movie.Plot}`);
    descripcionpelicula.appendChild(renderdescpelicula);
    contenedortarjeta.appendChild(descripcionpelicula);

    const añopelicula = document.createElement('p');
    añopelicula.classList.add('contentbusqueda');
    const renderañopelicula = document.createTextNode(`Año: ${movie.Year}`);
    añopelicula.appendChild(renderañopelicula);
    contenedortarjeta.appendChild(añopelicula);

    const generopelicula = document.createElement('p');
    generopelicula.classList.add('contentbusqueda');
    const rendergenpelicula = document.createTextNode(`Género: ${movie.Genre}`);
    generopelicula.appendChild(rendergenpelicula);
    contenedortarjeta.appendChild(generopelicula);

    const scorenpelicula = document.createElement('p');
    scorenpelicula.classList.add('contentbusqueda');
    const renderscorepelicula = document.createTextNode(`Score IMDB: ${movie.imdbRating}`);
    scorenpelicula.appendChild(renderscorepelicula);
    contenedortarjeta.appendChild(scorenpelicula);

    const repartopelicula = document.createElement('p');
    repartopelicula.classList.add('contentbusqueda');
    const renderrepartopelicula = document.createTextNode(`Reparto: ${movie.Actors}`);
    repartopelicula.appendChild(renderrepartopelicula);
    contenedortarjeta.appendChild(repartopelicula);

    const busquedanueva = document.createElement('input');
    busquedanueva.setAttribute('placeholder', "Buscar otra película ");
    busquedanueva.setAttribute('type', "search");
    busquedanueva.classList.add("input-nuevabusqueda");
    contenedortarjeta.appendChild(busquedanueva);


    const btnstarjeta = document.createElement('div');
    btnstarjeta.classList.add('btns-busqueda');


    const redirvermas =document.createElement('a');
    redirvermas.setAttribute('href','index.html');
    const btnvermas = document.createElement('button');
    btnvermas.classList.add('btn-volver-busqueda');
    const renderbtnvermas = document.createTextNode('Volver');
    btnvermas.appendChild(renderbtnvermas);
    redirvermas.appendChild(btnvermas);
    btnstarjeta.appendChild(redirvermas);

    const newsearch =document.createElement('a');
    newsearch.setAttribute('href','busqueda.html');
    const newsearchbtn = document.createElement('button');
    newsearchbtn.classList.add('btn-volver-busqueda');
    const newsearchbtntext = document.createTextNode('Buscar');
    newsearchbtn.appendChild(newsearchbtntext);
    newsearch.appendChild(newsearchbtn);
    btnstarjeta.appendChild(newsearch);


    card.appendChild(imagentarjeta);
    card.appendChild(contenedortarjeta);
    contenedortarjeta.appendChild(btnstarjeta);
    tarjetabusqueda.appendChild(card);



    newsearchbtn.addEventListener('click',(e) => {

       
        const busquedapeli = localStorage.setItem('Busqueda', JSON.stringify(busquedanueva.value).toLowerCase());

        
    
    
    });

}


}








document.addEventListener('DOMContentLoaded', () => {



    const busquedapeli = localStorage.getItem('Busqueda');

    const busquedaparse = JSON.parse(busquedapeli);
    

    renderbtnvermas(`${busquedaparse}`);

    console.log(busquedaparse);


    

    


})




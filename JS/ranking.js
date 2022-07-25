const divranking = document.getElementById('mi-ranking');


const btnagregar = document.getElementById('btn-agregar');
const titulo = document.getElementById('titlemovie');
const año = document.getElementById('yearmovie');
const genero = document.getElementById('genremovie');
const score = document.getElementById('scoremovie');
const imagen = document.getElementById('imgmovie');



let cont = 0;


let Peli = [{

    titulo:titulo.value,
    año:año.value,
    genero:genero.value,
    imagen:imagen.value,
    score:score.value,
    id:cont,
    
}];




document.addEventListener('DOMContentLoaded', () => {



const rank = localStorage.getItem('miranking');


const rankparse = JSON.parse(rank);

const ultimoid = localStorage.getItem('lastid');

const ultimoidparse = JSON.parse(ultimoid);





if(rankparse!=null){

  


let img = `${imagen.value}` !== "" ? `${imagen.value}`  : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png";

Peli.push({titulo:`${titulo.value}`,año:`${año.value}`,genero:`${genero.value}`,score:`${score.value}`,imagen:img,id:cont});



Peli = Peli.concat(rankparse);


const arraymiranking = localStorage.setItem('miranking', JSON.stringify(Peli));

    



renderaddmovie(Peli);

}else
{


cont = ultimoidparse;

const lastid = localStorage.setItem('lastid',cont); 


const arraymiranking = localStorage.setItem('miranking', JSON.stringify(Peli));



renderaddmovie(Peli);

}

})


btnagregar.addEventListener('click',(e) => {


    const ultimoid = localStorage.getItem('lastid');

    const ultimoidparse = JSON.parse(ultimoid);

    if(`${titulo.value}` == "" || `${año.value}` == "" || `${genero.value}` == "" || `${score.value}` == "")   {
        
        alert("Completá todos los datos por favor");

    }

    else{
    const rank = localStorage.getItem('miranking');

   

    const rankparse = JSON.parse(rank);

    cont = ultimoidparse;

    cont++;

    const lastid = localStorage.setItem('lastid',cont);     

    let img = `${imagen.value}` !== "" ? `${imagen.value}`  : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png";

    Peli.push({titulo:`${titulo.value}`,año:`${año.value}`,genero:`${genero.value}`,score:`${score.value}`,imagen:img,id:cont});


    const arraymiranking = localStorage.setItem('miranking', JSON.stringify(Peli));




    renderaddmovie(Peli);


    }

})


const eliminarcard = (movies,id) => {
   
    
    const eliminar = movies.filter(movie => movie.id != id);


    const arraymiranking = localStorage.setItem('miranking', JSON.stringify(eliminar));


    renderaddmovie(eliminar);





}



const modificar = (movies,title,year,genre,myscore,img,id) =>{



    let modificar = movies.filter(movie => movie.id != id);


    movies.forEach(movie => {

        if(movie.id === id){

            movie.titulo =title,
            movie.año=year,
            movie.genero=genre,
            movie.score=myscore,
            movie.imagen=img,
            movie.id=id,

        

        modificar = modificar.concat(movie);

        const arraymiranking = localStorage.setItem('miranking', JSON.stringify(modificar));


        renderaddmovie(modificar);

        }






    })

   
}



const renderaddmovie = (ranking) => {

    

    while (divranking.firstChild) {
    divranking.removeChild(divranking.firstChild);}

    
    ranking.forEach(movie =>  {
           
    
    if(movie.id !=0){
    const card = document.createElement('div');
    card.classList.add('card-ranking');


    const contenedortarjeta = document.createElement('div');
    contenedortarjeta.classList.add('contentcard-ranking');


    const imagentarjeta = document.createElement('div');
    imagentarjeta.classList.add('imgcard-ranking');


    const imgcard = document.createElement('img');
    imgcard.setAttribute('src',movie.imagen);
    imgcard.setAttribute('alt',movie.titulo);
    imgcard.classList.add("img-ranking");
    imagentarjeta.appendChild(imgcard);

    const titulotarjeta = document.createElement('div');
    titulotarjeta.classList.add('titulo-card');


    const titulopelicula = document.createElement('h4');
    titulopelicula.classList.add('titulocard-ranking');
    const rendertitulopelicula = document.createTextNode(` ${movie.titulo}`);
    titulopelicula.appendChild(rendertitulopelicula);
    titulotarjeta.appendChild(titulopelicula);
    

    const añopelicula = document.createElement('p');
    añopelicula.classList.add('contentranking');
    const renderañopelicula = document.createTextNode(`Año: ${movie.año}`);
    añopelicula.appendChild(renderañopelicula);
    contenedortarjeta.appendChild(añopelicula);

    const generopelicula = document.createElement('p');
    generopelicula.classList.add('contentranking');
    const rendergenpelicula = document.createTextNode(`Género: ${movie.genero}`);
    generopelicula.appendChild(rendergenpelicula);
    contenedortarjeta.appendChild(generopelicula);

    const scorenpelicula = document.createElement('p');
    scorenpelicula.classList.add('contentranking');
    const renderscorepelicula = document.createTextNode(`Mi puntaje: ${movie.score}`);
    scorenpelicula.appendChild(renderscorepelicula);
    contenedortarjeta.appendChild(scorenpelicula);

    const btnmodificar = document.createElement('button');
    btnmodificar.classList.add('btn-card');
    const renderbtnmodificar = document.createTextNode("Modificar");
    btnmodificar.appendChild(renderbtnmodificar);
    contenedortarjeta.appendChild(btnmodificar);

    const btneliminar = document.createElement('button');
    btneliminar.classList.add('btn-card');
    const renderbtneliminar = document.createTextNode("Eliminar de mi ranking");
    btneliminar.appendChild(renderbtneliminar);
    contenedortarjeta.appendChild(btneliminar);


    btneliminar.addEventListener('click',(e) =>{
        
        
        eliminarcard(ranking,`${movie.id}`);
        


    });

    btnmodificar.addEventListener('click',(e) => {



    while (card.firstChild) {
    card.removeChild(card.firstChild);}
            
    const modificartitulo = document.createElement('input');
    modificartitulo.classList.add('input-modificacion');
    modificartitulo.setAttribute('type', "text");
    modificartitulo.setAttribute('value',`${movie.titulo}`);
    card.appendChild(modificartitulo);

    const modificaraño = document.createElement('input');
    modificaraño.classList.add('input-modificacion');
    modificaraño.setAttribute('type', "text");
    modificaraño.setAttribute('value',`${movie.año}`);
    card.appendChild(modificaraño);

    const modificargenero = document.createElement('input');
    modificargenero.classList.add('input-modificacion');
    modificargenero.setAttribute('type', "text");
    modificargenero.setAttribute('value',`${movie.genero}`);
    card.appendChild(modificargenero);

    const modificarscore = document.createElement('input');
    modificarscore.classList.add('input-modificacion');
    modificarscore.setAttribute('type', "text");
    modificarscore.setAttribute('value',`${movie.score}`);
    card.appendChild(modificarscore);

    const modificarimagen = document.createElement('input');
    modificarimagen.classList.add('input-modificacion');
    modificarimagen.setAttribute('type', "text");
    modificarimagen.setAttribute('value',`${movie.imagen}`);
    card.appendChild(modificarimagen);

    const btnconfirmar = document.createElement('button');
    btnconfirmar.classList.add('btn-confirmar');
    const renderbtnconfirmar = document.createTextNode("Confirmar");
    btnconfirmar.appendChild(renderbtnconfirmar);
    card.appendChild(btnconfirmar);



    btnconfirmar.addEventListener('click',(e)=>{


        modificar(ranking,`${modificartitulo.value}`,`${modificaraño.value}`,`${modificargenero.value}`,`${modificarscore.value}`,`${modificarimagen.value}`,movie.id);

    })


    

   


    });



    card.appendChild(imagentarjeta);
    card.appendChild(titulotarjeta);
    card.appendChild(contenedortarjeta);
    
    divranking.appendChild(card);
 
  

    return;
    }

   


    });

    



}

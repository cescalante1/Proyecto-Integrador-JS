document.addEventListener('DOMContentLoaded', () => {

    const arraypeliculas = localStorage.setItem('Peliculas', JSON.stringify(PELICULAS));
 


    rendercards();


})
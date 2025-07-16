import './style.css';
import { getImages } from './src/components/infoAPI/infoAPI';
import { funcionAEjecutar, prepararElModal } from './src/components/modal/modal';
import { completarHeader, pintarHTML } from './src/components/home/home';
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';

//Variables
let firstWord = 'nada de nada';

// Pinto el HTML
pintarHTML();
completarHeader();

// El modal
prepararElModal();
const modalButton = document.querySelector(".tryAgain");
modalButton.addEventListener("click", funcionAEjecutar);


//Traer información inicial de la API y pintarla
getImages('dog');

//Guardo la primera palabra de busqueda, voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.
document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    if (firstWord === 'nada de nada') {
      firstWord = event.target.value;
    }
    getImages(`${valorInput}`);
    event.target.value = '';
  }
});

// Pinchar en icono Pinterest para refrescar la primera búsqueda
document.querySelector(`.iconePinterest`).onclick = function () {
  if (firstWord === 'nada de nada') {
    getImages('cat');
  }
  else {
    getImages(firstWord)
  };
};
import './style.css';
import { getImages } from './src/components/infoAPI/infoAPI';
import { aceptNotification } from './src/components/modal/modal';
import { pintarHTML } from './src/components/home/home';
export const accesKey = 'ulcAHukAVcmsmE3YQCJcVOoI_rtjQjdVJzrx7QnswEI';
export const endPoint = 'https://api.unsplash.com/search/photos';
//Variables
let firstSearchWord = 'nada de nada';
// Pinto el HTML
pintarHTML();
// Aceptar la notificación de busqueda errónea
const modalButton = document.querySelector(".tryAgain");
modalButton.addEventListener("click", aceptNotification);
//Traer información inicial de la API y pintarla
getImages('cat');
//Voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.
document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    if (valorInput === '') {
      getImages(`cat`);
      event.target.value = '';
    }
    else {
      getImages(`${valorInput}`);
      event.target.value = '';
    }
  }
});
// Pinchar en icono Pinterest para refrescar la búsqueda inicial de gatos
document.querySelector(`.iconePinterest`).onclick = function () {
  getImages('cat');
};
import "./infoAPI.css";
import { createCards } from "../card/Card";
import { endPoint, accesKey } from "../../../main";
export let imagesList = {}
// Traigo la info de la API y llamo a Card.js para pintar las Cards.
export async function getImages(query) {
  let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
  let jsonResponse = await response.json();
  imagesList = await jsonResponse.results;
  //Si no se encuentra ningún resultado, pintamos resultado de gatos y ejecutamos el aviso.
  //Pero ahora siempre se envía un resultado desde la API se escriba lo que se escriba.
  if (imagesList.length === 0) {
    const modalNotification = document.getElementById('notification');
    modalNotification.style.display = 'flex';
    getImages('gatos');
  }
  //Si hay algún resultado creamos las cartas.
  else {
    createCards(imagesList);
  }
}

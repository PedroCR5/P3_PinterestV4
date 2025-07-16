import "./modal.css";
export function funcionAEjecutar() {
  const notificationModal = document.querySelector("#notification");
  notificationModal.style.display = 'none';
};
//Añado información a los elementos del modal.
export function prepararElModal() {
  let textNotification = document.getElementsByClassName(`notificationH2`);
  textNotification[0].innerHTML = `¡Busqueda errónea!, por favor inténtalo con palabras como gato, perro...`;
  let buttonNotification = document.getElementsByClassName(`tryAgain`);
  buttonNotification[0].innerHTML = `¡Pulsa para intentarlo de nuevo!`;
}
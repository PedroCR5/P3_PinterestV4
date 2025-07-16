import "./home.css";
import { createButton } from "../button/button";
//Pintar el HTML
export function pintarHTML() {
  let appInfo = document.querySelector('#app');
  //Crear el Header
  const headerHTML = document.createElement("header");
  const divHeaderContainer = document.createElement("div");
  const imgIconePinterest = document.createElement("img");
  const headerSearchContainer = document.createElement("div");
  const spanIcon = document.createElement("span");
  const inputInfo = document.createElement("input");
  const imgDesktopIconCampana = document.createElement("img");
  const imgDesktopIconComments = document.createElement("img");
  divHeaderContainer.className = "headerContainer";
  imgIconePinterest.className = "iconePinterest";
  headerSearchContainer.className = "headerSearchContainer";
  spanIcon.className = "icon";
  spanIcon.innerHTML = "🔍";
  inputInfo.className = "inputInfo";
  inputInfo.id = "word";
  inputInfo.type = "text";
  inputInfo.placeholder = "Buscar...";
  imgDesktopIconCampana.className = "desktopIconCampana";
  imgDesktopIconComments.className = "desktopIconComments";
  appInfo.appendChild(headerHTML);
  headerHTML.appendChild(divHeaderContainer);
  divHeaderContainer.appendChild(imgIconePinterest);
  divHeaderContainer.appendChild(headerSearchContainer);
  headerSearchContainer.appendChild(spanIcon);
  headerSearchContainer.appendChild(inputInfo);
  divHeaderContainer.appendChild(imgDesktopIconCampana);
  divHeaderContainer.appendChild(imgDesktopIconComments);
  divHeaderContainer.innerHTML += createButton({ texto: "D", size: "s", classInfo: "upRightButton" });
  //Crear el Main
  const mainHTML = document.createElement("main");
  const divNotification = document.createElement("div");
  const notificationH2 = document.createElement("h2");
  const divContainerCards = document.createElement("div");
  divNotification.id = "notification";
  notificationH2.className = "notificationH2";
  divContainerCards.id = "containerCards";
  appInfo.appendChild(mainHTML);
  mainHTML.appendChild(divNotification);
  divNotification.appendChild(notificationH2);
  divNotification.innerHTML += createButton({ size: "s", classInfo: `tryAgain` });
  mainHTML.appendChild(divContainerCards);
};
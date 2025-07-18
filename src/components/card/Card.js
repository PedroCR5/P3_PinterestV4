import { createButton } from "../button/button";
import "./card.css";
// Color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// Función crear cartas
export function createCards(imagesList) {
  document.querySelector("#containerCards").innerHTML = ` `;
  console.log(imagesList);

  // Pinto todas las cartas
  imagesList.forEach(image => {
    let randomColorImg = getRandomColor();
    let divContainerCards = document.querySelector("#containerCards");
    const cardDiv = document.createElement("div");
    const imgImageDiv = document.createElement("img");
    const imgPersonRound = document.createElement("img");
    const name = document.createElement("p");
    const date = document.createElement("p");
    const upImg = document.createElement("img");
    cardDiv.className = "cardDiv";
    imgImageDiv.className = "imgImageDiv";
    imgPersonRound.className = "imgPersonRound";
    name.className = "name";
    date.className = "date";
    upImg.className = "upImg";
    imgImageDiv.src = image.urls.small;
    imgImageDiv.loading = "lazy";
    imgPersonRound.src = image.user.profile_image.large;
    imgPersonRound.style.borderColor = randomColorImg;
    name.innerHTML = image.user.name;
    date.innerHTML = image.created_at.substring(0, 10);
    upImg.src = "./assets/upImage.png";
    divContainerCards.appendChild(cardDiv);
    const initialIconsBox = document.createElement("div");

    cardDiv.appendChild(initialIconsBox);

    cardDiv.appendChild(imgImageDiv);
    cardDiv.appendChild(imgPersonRound);
    cardDiv.appendChild(name);
    cardDiv.appendChild(date);
    cardDiv.appendChild(upImg);
    //Camara y likes
    const cameraContainer = document.createElement("div");
    const camera = document.createElement("img");
    const cameraNumber = document.createElement("span");
    const likesContainer = document.createElement("div");
    const likes = document.createElement("img");
    const likesNumber = document.createElement("span");
    initialIconsBox.className = "initialIconsBox";
    cameraContainer.className = "cameraLikesContainer";
    likesContainer.className = "cameraLikesContainer";
    camera.className = "camera";
    camera.src = "./assets/camera.png";
    cameraNumber.className = "cameraNumber";
    cameraNumber.innerHTML = image.user.total_photos;
    likesContainer.className = "cameraLikesContainer";
    likes.className = "likes";
    likes.src = "./assets/heart.png";
    likesNumber.className = "likesNumber";
    likesNumber.innerHTML = image.likes;
    initialIconsBox.appendChild(cameraContainer);
    cameraContainer.appendChild(camera);
    cameraContainer.appendChild(cameraNumber);
    initialIconsBox.innerHTML += createButton({ texto: "Visitar", size: "l", classInfo: `visitar` });
    initialIconsBox.appendChild(likesContainer);
    likesContainer.appendChild(likes);
    likesContainer.appendChild(likesNumber);
  });
}
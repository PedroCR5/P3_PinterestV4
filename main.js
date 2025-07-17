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
getImages('dog');
//Guardo la primera palabra de busqueda, voy a infoAPI.js para recoger la info y pinto las Cards en Card.js.
document.getElementById('word').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const valorInput = event.target.value;
    if (firstSearchWord === 'nada de nada') {
      firstSearchWord = event.target.value;
    }
    getImages(`${valorInput}`);
    event.target.value = '';
  }
});

// Pinchar en icono Pinterest para refrescar la primera búsqueda
document.querySelector(`.iconePinterest`).onclick = function () {
  if (firstSearchWord === 'nada de nada') {
    getImages('cat');
  }
  else {
    getImages(firstSearchWord)
  };
};

/* 
//Muy buena base de tu proyecto Async de Pinterest, pero hay unos detalles a mejorar que te dejo en los comentarios de más abajo.
Las Notas Técnicas son las más críticas, pero no por ello dejes de lado las Propuestas de Mejora (sobre todo las tres primeras).
//No te sientas frustrado por tantas correcciones, tienes una muy buena base, solo debes afinar un poco más. Las mejoras que te propongo no te deberían suponer dificultad, así que espero el ajuste de tu código.
//Tal como las veces anteriores, por favor, no olvides volver a colocar el link del proyecto para que el sistema me notifique que ya hiciste los cambios.

Puntos Positivos
//Tienes una muy buena base de componentes, eso hace que tu código sea mucho más legible, mantenible y escalable.
//Buen manejo del async/await en tu petición. Felicidades!
//Excelente definición y uso de variables en el CSS. Aunque hay algunos detalles que podemos pulir en proyectos futuros.
//El uso del “lazy loading” es un detalle muy pro. ¡El lujo está en los detalles!


Mejoras Opcionales

Tal como se señala en los requisitos, se deben cumplir también con los requisitos básicos de los primeros proyectos. Nunca olvides las meta etiquetas, son ellas las que te ayudarán a posicionar tu página.
//Hay varias funciones que te podrías ahorrar; por ejemplo, la función completarHeader podrías ahorrártela añadiendo el atributo directamente al elemento.
Es mejor práctica añadir el atributo src de las imágenes directamente en el elemento y no por el CSS. Por accesibilidad, debes añadir también atributos como el “alt” (esa info la puedes tomar de la API)
Se recomienda que los nombres de las funciones sean más indicativos de éstas.
Hay que cuidar un poco más el visual de la página.
Para ser fiel al modelo, te faltó la nav que está al lado del logo.


Notas Técnicas

Es recomendable que el HTML sea añadido por manejo del DOM y no por innerHTML, esto es bastante ineficiente en una app como Pinterest que maneja muchas imagenes. Además que te va a ocasionar otros problemas como los que te detallo más abajo.
Aunque tu gallery no queda vacía ocurre lo siguiente:
Si no hago ninguna búsqueda con el input y clico en el logo me muestra gatos, que no es lo que veo cuando renderizo la página por primera vez (perros).
Si hago una búsqueda de cualquier palabra y luego clico el logo, este no cumple la función de volver a la búsqueda inicial, sino que me renderiza las imagenes de la primera palabra que busqué con el input. La respuesta está en la secuencia de ejecución de tu código.
La información especial debería estar en cada card , cada vez que haces hover en alguna de ellas, y no solo en la primera. 
//Adicionalmente, el utilizar “document.getElementsByTagName('div')[5]”, no es una buena práctica porque si añades algo más al HTML antes de tus tarjetas el código se va a romper.
Revisa la composición de tu componente Button, tienes varios detalles: texto, estilos, uso.
*/
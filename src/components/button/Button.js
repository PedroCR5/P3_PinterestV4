import "./Button.css";
// Crear botones
export const createButton = ({
  classInfo = "",
  bgColor,
  texto = "Button",
}) => {
  return `<button class="${classInfo}" style="background-color: ${bgColor}">${texto}</button>`
}
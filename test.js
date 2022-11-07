const button = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = [
  " #FF5733 ",
  " #FFFF33 ",
  " #61FF33 ",
  " #33FFE3 ",
  " #3355FF ",
  " #FF3386 ",
];

button.addEventListener("click", () => {
  let hexColor = colors[getRandomColor()];
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

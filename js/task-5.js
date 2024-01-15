function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onButtonClick = () => {
  const bodyColor = getRandomHexColor();
  document.querySelector('.color').textContent = bodyColor;
  document.querySelector('.color').style.color = bodyColor;
  document.querySelector('body').style.backgroundColor = bodyColor;
};
document
  .querySelector('.change-color')
  .addEventListener('click', onButtonClick);

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  document.querySelector("h1").innerText = `rgb(${r},${g},${b})`;
};
const btn = document.querySelector("#btn");
btn.addEventListener("click", randomColor);

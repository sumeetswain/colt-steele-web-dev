let btn = document.querySelector("#btn");
btn.addEventListener("click", function (evt) {
  console.log(evt);
});

let text = document.querySelector("#text");
text.addEventListener("keydown", function (evt) {
  console.log(evt.key);
  console.log(evt.code);
});

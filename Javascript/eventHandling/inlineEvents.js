const btn2 = document.querySelector("#btn2");
btn2.onclick = function () {
  console.log("nice clicks");
};

function entered() {
  console.log("GTFO");
}
btn2.onmouseenter = entered;

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function () {
  console.log("clicked");
});
btn3.addEventListener("mouseenter", entered);

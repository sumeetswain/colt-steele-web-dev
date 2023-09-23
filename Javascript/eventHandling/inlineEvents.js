const btn = document.querySelector("#btn");
btn.onclick = function () {
  console.log("nice clicks");
};

function entered() {
  console.log("GTFO");
}

btn.onmouseenter = entered;

const form = document.querySelector("form");
const text = document.querySelector("#text");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent submitting the page
  const newLI = document.createElement("LI"); //create a new li element
  newLI.innerText = text.value; // set the innertext of li from the textbox
  list.appendChild(newLI); // add the new li to the ul
  text.value = ""; // reset the textbox
  // * preventDefault stops the default behaviour of the element, which in case of a form is to submit to the target page in the action attribute of form
});

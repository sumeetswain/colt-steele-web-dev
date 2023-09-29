const req = new XMLHttpRequest();

req.onload = function () {
  console.log("loaded");
  const data = JSON.parse(this.responseText);
  console.log(data.name);
  console.log(data.height);
};
req.onerro = function () {
  console.log("not loaded");
  console.log(this);
};
req.open("GET", "https://swapi.dev/api/people/1/");
req.send();

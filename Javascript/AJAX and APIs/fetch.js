fetch("https://swapi.dev/api/people/1/") // this returns a promise
  .then((res) => {
    console.log("resolved", res);
    // * res is the response we got from the fetch function , it is an object but it is incomplete
    return res.json();
    // * so we use .json() on it to convert it into JSON and it returns a promise
  })
  .then((data) => {
    console.log(data);
    // * the data we receive from .json is printed
  })
  .catch((e) => {
    console.log("error", e);
  });

const loadStarWars = async () => {
  const res = await fetch("https://swapi.dev/api/people/2/");
  // * storing the response from fetch in res
  const data = await res.json();
  // * parsing res into json and storing it in data
  console.log(data);
};
loadStarWars();

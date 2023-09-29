axios
  .get("https://swapi.dev/api/people/1/")
  .then((res) => {
    // console.log(res); in axios the response we get already has the data parsed inside the object
    console.log(res.data); //we can print the data from the object by res.data
  })
  .catch((e) => {
    console.log(e);
  });

const getStarWars = async () => {
  try {
    const res = await axios.get("https://swapi.dev/api/people/10/");
    console.log(res.data);
  } catch (e) {
    console.log("error", e);
  }
};
// getStarWars();

// using headers in axios
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
const newJoke = async () => {
  const joke = await dadJoke();
  const newLI = document.createElement("li");
  newLI.append(joke);
  jokes.append(newLI);
};
const dadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com", config);
    //   console.log(res.data.joke);
    return res.data.joke;
  } catch (e) {
    return "An error occured";
  }
};
button.addEventListener("click", newJoke);

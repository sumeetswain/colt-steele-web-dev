const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  // since we are using await in this function so we have to make an async function
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );
  // * we have to wait for axios to get the result from the URL so we have to await it
  //* we get res as an object which has all the search results from axios and then we take the 1st result and use the show > image > medium property to get the image link
  makeImages(res.data);
});
const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};

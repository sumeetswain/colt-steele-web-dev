const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  // since we are using await in this function so we have to make an async function
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  ); // we have to wait for axios to get the result from the URL so we have to await it
  const link = res.data[0].show.image.medium;
  //* we get res as an object which has all the search results from axios and then we take the 1st result and use the show > image > medium property to get the image link
  const img = document.createElement("img");
  img.src = link;
  document.body.append(img);
});

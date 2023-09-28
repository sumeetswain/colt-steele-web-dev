const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

fakeRequest("fake.com").then(() => {
  console.log("done");
});

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
console.log(fakeRequest());
fakeRequest("fake.com").then(() => {
  console.log("done");
});
// * so fakeRequest has a Promise as a value stored into it and initally the promise is pending, when we resolve the fakeRequest it executes the .then part of code

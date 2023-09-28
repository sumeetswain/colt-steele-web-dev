const login = async (username, password) => {
  if (!username || !password) throw "missing credentials"; // if username or password is not entered return missing credentials as an error
  if (password === "nice") return "welcome!"; // if password is right then return welcome
  throw "invalid password"; // else throw an error saying password invalid
};

login("ads2e31dasd", "nice")
  .then((msg) => {
    console.log("hello");
    console.log(msg); // the returned value from the promise is captured in msg and printed here
  })
  .catch((err) => {
    console.log("something went wrong");
    console.log(err); // the thrown error is caught in err and printed here
  });

const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(10); // this will generate a salt for the password
  const hash = await bcrypt.hash(pw, salt); // now we will hash the password with the salt
  // const hash = await bcrypt.hash(pw,12) here we send the password and the salt rounds together instead of doing them separately
  console.log(salt);
  console.log(hash);
};

hashPassword("password");

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  // now we compare the password with the hashed password, now compare function already handles if there is salt included in the hashed password, if both of them match then it returns true
  if (result) {
    console.log("Login Successful");
  } else {
    console.log("Wrong Password, Try again");
  }
};

login(
  "password",
  "$2b$10$rAqFYgUL3K4A969ORYLbseZNNGwXuUevJ6nCKFQbJvXuuVV/c1kyO"
);

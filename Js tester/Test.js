const { default: fetchData } = require("data-fetch-ts")

const body = {
  "username": "AMi",
  "email": "ami@gmail.com",
  "number": "01726565650",
  "image": "ami.jpn",
  "password": "aminai",
  "semester": "1st"
}

const fetch = async () => {
  const endpoint = 'http://localhost:6969/api/v1/sign-up'
  const data = await fetchData({endpoint, method : "POST"});
  console.log(data);
}
fetch();
const axios = require("axios");
const res = axios.get("https://lms.tuit.uz");
res.then((data) => {
  console.log(data);
});

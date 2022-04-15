const express = require("express");
const app = express();
const api = require("./api/2.json");
app.use(express.json());
const port = 5000;

app.post("/", (req, res) => {
 console.log(JSON.stringify(api));
});

app.listen(port, () => {
  console.log("chal gya");
});

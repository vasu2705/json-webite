const express = require("express");
const app = express();
const api = require("./api/2.json");
app.use(express.json());

app.get("/", (req, res) => {
  res.send(JSON.stringify(api));
  console.log(JSON.stringify(api));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`the application started successfully on port `);
});

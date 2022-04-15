const express = require("express");
const app = express();
const api = require("./api/2.json");
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log(JSON.stringify(api));
});

app.listen(port, () => {
  console.log(`the application started successfully on port ${port}`);
});

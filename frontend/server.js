const express = require("express");

const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

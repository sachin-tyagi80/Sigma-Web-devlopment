const express = require("express");
const app = express();
const path = require("path");
//console.dir(app);

let port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/home", (req, res) => {
  res.send("hello,i am root");
});
///request
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

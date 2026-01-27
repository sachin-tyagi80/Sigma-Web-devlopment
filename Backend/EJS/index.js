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
///request
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

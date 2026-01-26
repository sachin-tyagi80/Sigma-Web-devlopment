const express = require("express");
const app = express();
//console.dir(app);

let port = 3000;
///request
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

////req listien
// app.use((req, res) => {
//   console.log("request received");
//   //res.send("this is a basic response");
//   ////sending response
//   res.send({
//     name: "sachin",
//     age: 20,
//   });
// });

// ///Routing
// app.get("/", (req, res) => {
//   res.send("hello,i am root");
// });
// app.get("/apple", (req, res) => {
//   res.send("you conacted apple path");
// });
// app.get("/orange", (req, res) => {
//   res.send("you conacted orange path");
// });

// app.use((req, res) => {
//   res.status(404).send("This path does not exist");
// });

/////////path parameters
app.get("/", (req, res) => {
  res.send("hello,i am root");
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  res.send("hello,i am root");
});
/////query
app.get("/search", (req, res) => {
  let { q } = req.query;
  res.send(`these are the result for: ${q}`);
});

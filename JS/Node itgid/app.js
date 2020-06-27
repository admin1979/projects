let express = require("express");
let app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  console.log("load  загружен из статитки");
  res.render("index.html");
});

app.get("/my", function (req, res) {
  console.log("my");
  res.send("Привет мир!");
});

app.get("/my1", function (req, res) {
  console.log("my1");
  res.send("Привет Node!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

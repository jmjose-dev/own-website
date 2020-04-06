var ex = require("express");
var ej = require("ejs");
var app = ex();

app.use(ex.static("public"));
app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.listen("3000", function () {
  console.log("Server is running");
});

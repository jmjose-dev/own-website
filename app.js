var ex = require("express");
var ej = require("ejs");
var app = ex();
var port = process.env.PORT || 3000;
app.use(ex.static("public"));
app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.listen(port, function () {
  console.log("Server is running");
});

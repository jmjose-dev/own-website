var ex = require("express");
var ej = require("ejs");
var app = ex();

app.use(ex.static("public"));
app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server is running");
});

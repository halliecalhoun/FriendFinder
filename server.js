var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 4000;

app.use(express.static('app'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});
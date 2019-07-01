var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
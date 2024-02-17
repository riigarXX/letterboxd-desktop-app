const express = require("express");
const app = express();
const listEndpoints = require("express-list-endpoints");

console.log(listEndpoints(app));
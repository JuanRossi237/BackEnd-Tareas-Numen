var express = require("express");
var router = express.Router();
const controllers = require("../controller/controller");

/* GET users listing. */
router.get("/", controllers.myUser);


module.exports = a;

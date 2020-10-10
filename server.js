require("dotenv").config()
const express = require("express");
const bodyParse = require("body-parser");
const serveStatic = require("serve-static");
const exphbs  = require('express-handlebars');

require("./config/connection");

const PORT = process.env.PORT || 80;

const app = express();

app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');

//#region middleware
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.use("/static", serveStatic("public"));
//#endregion

app.use(require("./routes"));

app.listen(PORT, () => {
  console.log("App started: 🌎 => PORT:" + PORT);
});
// require("dotenv").config()
// const express = require("express");
// const bodyParse = require("body-parser");
// const serveStatic = require("serve-static");
// const exphbs  = require('express-handlebars');

// require("./config/connection");

// const PORT = process.env.PORT || 80;

// const app = express();

// app.engine('handlebars', exphbs());

// app.set('view engine', 'handlebars');

// //#region middleware
// app.use(bodyParse.urlencoded({extended: false}));
// app.use(bodyParse.json());

// app.use("/static", serveStatic("public"));
// //#endregion

// app.use(require("./routes"));

// app.listen(PORT, () => {
//   console.log("App started: 🌎 => PORT:" + PORT);
// });

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static('public/assets')); 


// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


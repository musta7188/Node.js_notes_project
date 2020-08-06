const path = require("path");
const express = require("express");
const hbs = require("hbs");
const moduleGeocode = require("./utils/geocode");
const moduleForecast = require("./utils/5-forecast");

const app = express();

///call the public folder and join it to the current directory
///define path for express configuration
const publicFolder = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const partialPath = path.join(__dirname, "../template/partials");

///setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);
////set up static directory to serve
app.use(express.static(publicFolder));

app.get("", (req, resp) => {
  resp.render("index", {
    title: "Weather App",
    name: "Mustafa",
    titlePage: "Weather",
  });
});

app.get("/about", (req, resp) => {
  resp.render("about", {
    title: "about section",
    name: "Mustafa",
    titlePage: "about",
  });
});

app.get("/help", (req, resp) => {
  resp.render("help", {
    message: "this is the help page",
    title: "help",
    name: "Mustafa Mohamed",
    titlePage: "help",
  });
});

app.get("info", (req, resp) => {
  resp.render("info", {
    message: "this is the app weather where you can find last forecast update",
  });
});









app.get("/weather", (req, resp) => {
  debugger
  if (!req.query.address) {
    return resp.send({
      error: "You must provide an address",
    });
  }
  moduleGeocode.geocode(req.query.address, (error, { latiTude, longiTude } = {}) => {
    if (error) {
      return resp.send({ error });
    }

    moduleForecast.forecast(latiTude, longiTude, (error, forecastData) => {
      if (error) {
        return resp.send({ error });
      }

      return resp.send({
        forecast: forecastData,
        address: req.query.address,
      }).end();
    });
  });
});




//chrome://inspect


app.get("/products", (req, resp) => {
  if (req.query.gender == "boy") {
    resp.send({
      products: ["car", "robot"],
    });
  }
  if (req.query.gender == "girl") {
    resp.send({
      products: ["barbie", "house"],
    });
  }
});

///any route coming after the help one that the clients is looking for will show a different message then that the not existing route one
app.get("/help/*", (req, resp) => {
  resp.render("404", {
    title: "404 help ",
    message: "help not found",
    name: "Mustafa",
    titlePage: "404 error",
  });
});

///call back function that show the message is optional is optional

////handel any route not been set
app.get("*", (req, resp) => {
  resp.render("404", {
    title: "404",
    message: "page not found",
    name: "Mustafa",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});

////nodemon app.js to run to be able to make changes run the server and see the changes

//{this command allow you to restart the server even if you modify the extantions file that this file is using }
// nodemon src/app.js -e js,hbs

const path = require("path");
const express = require("express");

///call the public folder and join it to the current directory
///define path for express configuration 
const publicFolder = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template")
const app = express();


///setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', templatePath)

////set up static directory to serve 
app.use(express.static(publicFolder));

app.get('', (req, resp) =>{
  resp.render('index', {
    title: 'Weather App',
    name: 'Mustafa'
  })
})

app.get('/about', (req, resp) =>{
  resp.render('about', {
    title: 'about section',
    name: "Mustafa"
    
  })
})


app.get('/help', (req, resp) => {
  resp.render('help', {
    message: "this is the help page",
    name: "Mustafa Mohamed"
  })
})



app.get("/weather", (req, resp) => {
  resp.send({
    forecast: "it is 23 degree and raining ",
    location: "Philadelphia",
  });
});



///call back function that show the message is optional is optional



app.listen(3000, () => {
  console.log("server is up on port 3000");
});

////nodemon app.js to run to be able to make changes run the server and see the changes

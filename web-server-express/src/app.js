const path = require("path");
const express = require("express");

///call the public folder and join it to the current directory
const publicFolder = path.join(__dirname, "../public");

const app = express();



app.use(express.static(publicFolder));



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

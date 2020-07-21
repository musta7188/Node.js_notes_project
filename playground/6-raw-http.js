const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=c63d78724e7091670825c7985ba25fcb&query=45,-75&units=m`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(data);
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
